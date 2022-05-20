import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import {
  handleLoadProjects,
  handleDeleteProject,
} from '../../actions/projects';
import { extractFileNameWithExtension } from '../../util/extractFileName';
import { updateActiveProject } from '../../slice/projectSlice';

export const BackendImage = () => {
  const dispatch = useDispatch();
  const { projectsList } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(handleLoadProjects());
  }, []);

  return (
    <Container className='mx-5 my-3'>
      <Row>
        {projectsList.map((project) => {
          return (
            <Col className='my-3' sm={6} key={project.path}>
              <h3 className='col-3 my-4'>
                {extractFileNameWithExtension(project.path).toUpperCase()}
              </h3>
              <Link to='3dImage'>
                <Button
                  variant='primary'
                  className='col-3'
                  onClick={() => dispatch(updateActiveProject(project.path))}
                >
                  Przejdź
                </Button>
              </Link>
              <Button
                variant='danger'
                className='col-3 mx-2'
                onClick={() => dispatch(handleDeleteProject(project.filename))}
              >
                Usuń
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
