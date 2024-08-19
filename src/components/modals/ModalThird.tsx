import { Modal, Button } from "react-bootstrap"
import { ModalProps } from "../DialogContainer"

const ModalThird = ({ close }: ModalProps) => {
  return (
    <Modal show={true} onHide={() => close(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Третье окно</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'>Прям точно-точно?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => close(true)}>Yes</Button>
        <Button onClick={() => close(false)}>No</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalThird