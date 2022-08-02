import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";

const CustomModal = ({ showModal, setShowModal, title, message }) => {
    return (
        <>
            <Modal show={showModal} onHide={() => {setShowModal(false)}} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title>
                        <h1>{title}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{message}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Take A Look Around <BsArrowUpRight/></Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CustomModal;
