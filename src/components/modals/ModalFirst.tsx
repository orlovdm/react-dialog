import { Modal, Button } from "react-bootstrap"
import { ModalProps } from "../DialogContainer"

const ModalFirst = ({ close }: ModalProps) => {
  return (
    <Modal show={true} onHide={() => close(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Первое окно</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <strong>Вы уверены?</strong>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => close(true)}>Yes</Button>
        <Button onClick={() => close(false)}>No</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalFirst