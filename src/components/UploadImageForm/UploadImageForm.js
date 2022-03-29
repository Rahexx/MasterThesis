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
      <Modal.Title>Dodawanie zdjęcia z mikroskopu</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={submitForm}>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Image File</Form.Label>
          <Form.Control required type='file' onChange={onChangeFile} />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);
