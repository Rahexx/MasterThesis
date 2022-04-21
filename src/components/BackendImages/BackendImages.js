import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { API } from '../../config/index';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { handleLoadImages, handleDeleteImage } from '../../actions/images';
import { extractFileName } from '../../util/extractFileName';
import { updateActiveImage } from '../../slice/imageSlice';

export const BackendImage = () => {
  const dispatch = useDispatch();
  const { listImages } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(handleLoadImages());
  }, [listImages]);

  return (
    <Container className='mx-5 my-3'>
      <Row>
        {listImages.map((image) => {
          return (
            <Col className='my-3' sm={6} key={image.path}>
              <Link to='3dImage'>
                <img
                  src={`${API}/${image.path}`}
                  className='col-3'
                  alt='live organisms under microscope'
                  onClick={() => dispatch(updateActiveImage(image.path))}
                />
              </Link>
              <h3 className='col-3 my-4'>{extractFileName(image.path)}</h3>
              <Button
                variant='danger'
                className='col-3'
                onClick={() => dispatch(handleDeleteImage(image.filename))}
              >
                Delete
              </Button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
