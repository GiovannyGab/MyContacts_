import React from 'react';

import PropTypes from 'prop-types';
import { Overlay } from './style';
import ReactPortals from '../ReactPortals';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortals containerId="loader-root">
      <Overlay>
        <div className="loader" />
      </Overlay>
      ,
    </ReactPortals>

  );
}

Loader.propTypes = { isLoading: PropTypes.bool.isRequired };
