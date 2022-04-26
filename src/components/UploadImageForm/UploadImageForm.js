import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export const UploadImageForm = ({
  isOpen,
  handleCloseForm,
  submitForm,
  onChangeFile,
}) => (
  <Modal show={isOpen} onHide={handleCloseForm} backdrop='static' centered>
    <Modal.Header closeButton>
      <Modal.Title>Dodawanie projektu</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={submitForm}>
        <Form.Group controlId='formFile' className='mb-3'>
          <p>Można dodać jedynie pliki json lub csv.</p>
          <Form.Label>Projekt</Form.Label>
          <Form.Control
            required
            type='file'
            accept='.csv,.json'
            onChange={onChangeFile}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Wyślij
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);
