import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { UploadImageForm } from '../UploadImageForm/UploadImageForm';

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
      <UploadImageForm
        isOpen={showUploadFileForm}
        handleCloseForm={() => handleCloseUploadForm()}
        submitForm={(e) => {
          handleSubmit(e);
        }}
      />
      <div>{children}</div>
    </>
  );
};
