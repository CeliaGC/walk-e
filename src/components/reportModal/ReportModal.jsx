import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ReportModal = ({ text, onHide }) => {
  return (
    <>
      <Modal show={true} onHide={onHide} container={() => document.getElementById('board')}>
        <Modal.Header closeButton>
          <Modal.Title>Robot Report</Modal.Title>
        </Modal.Header>
        <Modal.Body><p data-testid={'final-report'}>{text}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReportModal;