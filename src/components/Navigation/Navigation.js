import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav, Button, ButtonGroup } from 'react-bootstrap';
import { updateActivePackage } from '../../slice/projectSlice';

export const Navigation = ({ handleOpenForm }) => {
  const dispatch = useDispatch();
  const { package3DList, activePackage } = useSelector(
    (state) => state.projects,
  );

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Rahexx3D</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Strona główna</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/3dImage'>
              <Nav.Link>Obraz 3D</Nav.Link>
            </LinkContainer>
          </Nav>
          <Navbar.Brand>
            <ButtonGroup className='mx-4'>
              {package3DList.map((pckg) => (
                <Button
                  key={`${pckg}-${Math.random * 1000}`}
                  variant={pckg === activePackage ? 'primary' : 'secondary'}
                  onClick={() => {
                    dispatch(updateActivePackage(pckg));
                  }}
                >
                  {pckg.toUpperCase()}
                </Button>
              ))}
            </ButtonGroup>
            <Button variant='primary' onClick={handleOpenForm}>
              Dodaj zdjęcie
            </Button>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
