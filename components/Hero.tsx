import React, { useEffect, useState } from 'react'
import { Modal, Input, Row, Checkbox, Text } from "@nextui-org/react";
import { Tooltip } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'
import { perfromContribute, raiseProposal } from '@/services/blockchain';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/interfaces';
const Hero = () => {
  const { isStakeholder, myBalance, balance, proposals } = useSelector((state: RootState) => state.globalStates)
  const [amount, setAmount] = useState('')
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const [title, setTitle] = useState('')
  const [beneficiary, setBeneficiary] = useState('')
  const [description, setDescription] = useState('')


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!title || !description || !beneficiary || !amount) return
    const proposal = { title, description, beneficiary, amount }

    await raiseProposal(title, description, beneficiary, amount);
    toast.success('Proposal created, reloading in progress...')
  }



  const onContribute = async () => {
    if (!!!amount || amount == '') {
      toast.error('ComeOn ! Stop joking , add some amount..', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    try {
      await perfromContribute(amount);

      toast.success('Transaction intitiated ! Please wait...', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error('Something went wrong !')
    }
  }


  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const opened = (): number => {
    return proposals.filter((proposal) => (
      new Date().getTime() < Number(proposal.duration)
    )).length;
  }
  




  return (
    <header>
      <div className='flex gap-2 flex-col  items-center text-pink-300 '>
        <div className='flex gap-6 items-center text-black'>
          <div className='text-xl border-2 border-blue-600  text-indigo-500 rounded-full p-3' >My balance <span className='text-xl bg-green-200 p-1  text-black rounded-full'>{myBalance}</span></div>
          <div className='text-xl border-2 border-blue-600  text-indigo-500 rounded-full p-3' >DAO balance <span className='text-xl bg-green-200 p-1  text-black rounded-full'>{balance}</span></div>

        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h2 className=' text-3xl font-[700] p-3  rounded-full text-slate-300  '>
          Currently Proposal{opened() == 1 ? '' : 's'} Opened : {opened()}
        </h2>
        <p className='flex text-white text-2xl font-[700]'>
          {
            false ? ("Raise Proposals on EthereStake") : ("")
          }
        </p>

        <div className='flex justify-center items-center '>
          <div>
            <input
              type='number'
              placeholder='1 ETH'
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required

              className='p-3 outline-none rounded-full border-indigo-500 border-2 bg-transparent text-white font-bold  '
            >
            </input>
          </div>

          <div
            className=" flex"
            role="group"
          >
            <Tooltip content={"Contribute 1 Ether, be a stakeholder"} rounded color="error">
              {/* <Button handler={onContribute} name="Contribute" /> */}
              <button color="warning" onClick={onContribute} className='p-3 ml-4 rounded-full bg-indigo-400 hover:bg-indigo-500 text-white font-[600]'>
                Contribute
              </button>
            </Tooltip>



            {isStakeholder ? (
              // isStakeHolder
              <Tooltip content={"Raise Proposals on EthereStake"} rounded color="error">
                <button color="warning" onClick={handler} className='p-3 ml-4 rounded-full bg-indigo-400 hover:bg-indigo-500 text-white font-[600]'>
                  Proposal
                </button>
              </Tooltip>
            ) : null}
          </div>
          <div>

            <Modal
              closeButton
              blur
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
              className="model"
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Create
                  <Text b size={18} className='ml-3'>
                    Proposal
                  </Text>
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                // contentLeft={<Mail fill="currentColor" />}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="eg. 2.5 Eth"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                // contentLeft={<Password fill="currentColor" />}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Beneficiary Address"
                  value={beneficiary}
                  onChange={(e) => setBeneficiary(e.target.value)}
                // contentLeft={<Password fill="currentColor" />}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                // contentLeft={<Password fill="currentColor" />}
                />

              </Modal.Body>
              <Modal.Footer>
                <button className='p-2 px-3 bg-indigo-400 hover:bg-indigo-500 m-auto shadow-lg rounded-full justify-center' onClick={handleSubmit} >
                  Submit Proposal
                </button>

              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>


    </header>
  )
}

export default Hero