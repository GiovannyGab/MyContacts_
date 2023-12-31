import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export default function FormGroup({ children, error, isLoading }) {
  return (
    <Container>
      <div className="form-group">
        {children}
        {isLoading && (<div className="loader" />)}

      </div>

      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormGroup.defaultProps = {
  error: null,
  isLoading: false,
};
