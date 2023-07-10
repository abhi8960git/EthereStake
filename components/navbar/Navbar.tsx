import React from 'react'
import Link from 'next/link'
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { HiOutlineInformationCircle } from 'react-icons/hi'
const Navbar = () => {
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
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et. Cras mattis consectetur purus sit amet
                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et.
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
        <button className='bg-indigo-500 p-3 rounded-full '>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar