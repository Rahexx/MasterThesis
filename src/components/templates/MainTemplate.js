import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export const MainTemplate = ({ children }) => (
  <>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>AppName</Navbar.Brand>
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
            <Button variant='primary'>Upload</Button>{' '}
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>{children}</div>
  </>
);
