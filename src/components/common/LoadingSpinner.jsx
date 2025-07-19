import React from 'react';
import { Spinner, Container } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <Spinner animation="border" role="status" variant="primary" className="mb-2">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="text-muted">Loading...</p>
      </div>
    </Container>
  );
};

export default LoadingSpinner;