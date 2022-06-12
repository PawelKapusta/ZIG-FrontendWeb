import { Button, Modal } from "react-bootstrap";
import React from "react";
import styles from "../styles/MainGameScreen.module.css";

function ModalFunc(props) {
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modalHeader}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.modalInfo}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};


const VerticalCenteredModal = props => {
  const modalInfo = props.modalInfo;
  const modalHeader = props.modalHeader;
  const buttonName = props.buttonName;

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className={styles.buttonStartInfo}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        {buttonName}
      </Button>

      <ModalFunc
        show={modalShow}
        modalInfo={modalInfo}
        modalHeader={modalHeader}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default VerticalCenteredModal;
