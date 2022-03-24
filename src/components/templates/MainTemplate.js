import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav, Button, Modal, Form } from 'react-bootstrap';

export const MainTemplate = ({ children }) => {
  const [showUploadFileForm, setShowUploadFileForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formFields = e.target;
    const titleInput = formFields[0].value;
    const fileInput = formFields[1];
  };

  const handleCloseUploadForm = () => setShowUploadFileForm(false);
  const handleOpenUploadForm = () => setShowUploadFileForm(true);

  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Rahexx3D</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/3dImage'>
                <Nav.Link>3D image</Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Brand>
              <Button variant='primary' onClick={handleOpenUploadForm}>
                Dodaj zdjęcie
              </Button>{' '}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={showUploadFileForm}
        onHide={handleCloseUploadForm}
        backdrop='static'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Dodawanie zdjęcia z mikroskopu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Enter image title'
              />
            </Form.Group>
            <Form.Group controlId='formFile' className='mb-3'>
              <Form.Label>Default file input example</Form.Label>
              <Form.Control required type='file' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div>{children}</div>
    </>
  );
};
