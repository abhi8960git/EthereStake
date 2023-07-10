import React from 'react'
import { Modal, Input, Row, Checkbox, Text } from "@nextui-org/react";
import { Tooltip } from '@nextui-org/react';

import Button from './Button'
const Hero = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const opened: number = 1;
  return (
    <header>
      <div className='flex gap-4 flex-col  items-center text-pink-300 '>
        {/* <h2 className=' text-3xl font-[700] p-3  rounded-full text-slate-300  '>
                Currently Proposal{opened == 1 ? '' : 's'} Opened : {opened}
            </h2> */}
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
              // onChange={(e) => setAmount(e.target.value)}
              required
              className='p-3 outline-none rounded-l-full border-indigo-500 border-2 bg-transparent text-white font-bold  '
            >
            </input>
          </div>

          <div
            className=" flex"
            role="group"
          >
            <Tooltip content={"Contribute 1 Ether, be a stakeholder"} rounded color="error">
              <Button name="Contribute" />
            </Tooltip>

            {true ? (
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
                // contentLeft={<Mail fill="currentColor" />}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="eg. 2.5 Eth"
                // contentLeft={<Password fill="currentColor" />}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Beneficiary Address"
                // contentLeft={<Password fill="currentColor" />}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Description"
                // contentLeft={<Password fill="currentColor" />}
                />

              </Modal.Body>
              <Modal.Footer>
                <button className='p-2 px-3 bg-indigo-400 hover:bg-indigo-500 m-auto shadow-lg rounded-full justify-center' >
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