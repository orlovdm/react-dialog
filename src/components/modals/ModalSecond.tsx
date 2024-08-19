import { Modal, Button } from "react-bootstrap"
import { ModalProps } from "../DialogContainer"

const ModalSecond = ({ close }: ModalProps) => {
  return (
    <Modal show={true} onHide={() => close(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Второе окно</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Точно?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => close(true)}>Yes</Button>
        <Button onClick={() => close(false)}>No</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalSecond