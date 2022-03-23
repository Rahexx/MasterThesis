import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export const MainTemplate = ({ children }) => (
  <>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>AppName</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#3Dimage'>3D image</Nav.Link>
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
