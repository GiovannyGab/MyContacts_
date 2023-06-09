import ReactDOM from 'react-dom';

import Proptypes from 'prop-types';

export default function ReactPortals({ containerId, children }) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }
  return ReactDOM.createPortal(children, container);
}

ReactPortals.propTypes = {
  containerId: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};
