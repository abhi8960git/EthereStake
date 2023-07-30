import React, { useEffect } from 'react'
import Link from 'next/link'
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { connectWallet, getEthereumContract } from '@/services/blockchain';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/interfaces';
import { truncate } from '@/utils/helper';
const Navbar = () => {
  useEffect(() => {
    getEthereumContract()
  }, [])
  const { wallet } = useSelector((states: RootState) => states.globalStates)
  console.log(typeof wallet);
  const { setVisible, bindings } = useModal();
  return (
    <div className='text-white flex justify-between m-9 items-center mx-[5em]'>
      <div className='text-3xl font-[700] shadow text-red-400'>
        EthereStake
      </div>

      <div className='flex justify-center items-center gap-2'>
        <div>
          <HiOutlineInformationCircle className='text-indigo-400' size={50} onClick={() => setVisible(true)} />

          <Modal
            scroll
            blur
            width="600px"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                How It Works
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text id="modal-description">
                <br />
                <h3>Proposal Creation</h3>
                - Any user with an Ethereum wallet can initiate a proposal on the DAO platform.
                - The user submits essential details about the proposal, including its purpose, budget, timeframe, and other relevant information.
                - The proposal is recorded on the blockchain, ensuring transparency and immutability.
                <br />

                <h3>Stakeholder Participation</h3>
                - To become a stakeholder, users must contribute a specified amount of ether to the DAO's smart contract address.
                - The smart contract verifies the contribution and allocates voting rights to the user based on their stake.
                - The more ether a user contributes, the greater their influence on voting decisions.
                <br />
                <h3> Proposal Voting</h3>
                - During the proposal's voting period, stakeholders can cast their votes on the platform.
                - Each stakeholder's vote is weighted based on the amount of ether they have staked.
                - The voting process is conducted on the blockchain, ensuring transparency and preventing double voting or manipulation.
                <br />
                ,<h3> Proposal Waiting Period</h3>
                - After the voting period concludes, the proposal enters a waiting period.
                - The waiting period allows time for the voting results to be finalized and any potential challenges to be addressed.
                - During this period, stakeholders and other users can monitor the progress of the proposal.
                <br />
                <h3>Proposal Completion</h3>
                - Once the waiting period ends, the proposal is considered complete.
                - If the proposal receives a predetermined threshold of "yes" votes, it is deemed successful.
                - If the proposal does not reach the threshold, it is considered unsuccessful.
                <br />
                <h3>Payout for Beneficiary</h3>
                - In the case of a successful proposal, the funds needed for the proposal are automatically released from the DAO's smart contract.
                - The designated beneficiary of the proposal receives the allocated funds directly into their Ethereum wallet.
                - The payout process is executed securely and without any intermediaries.
                <br />
                <h3> Continuing Governance</h3>
                - Stakeholders and users can continually raise new proposals, vote on them, and participate in the DAO's governance.
                - This iterative process ensures that the community remains actively engaged in decision-making and project funding.
                <br />
               
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={() => setVisible(false)}>
                Close
              </Button>
              <Button auto onPress={() => setVisible(false)}>
                Agree
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {
          wallet ? (
            <button className='bg-indigo-500 p-3 rounded-full ' >{truncate({ text: wallet, startChars: 4, endChars: 4, maxLength: 11 })}</button>

          ) :
            (
              <button className='bg-indigo-500 p-3 rounded-full ' onClick={connectWallet}>Connect Wallet</button>

            )
        }
      </div>
    </div>
  )
}

export default Navbar