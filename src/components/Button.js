import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, className, clickEvent }) {
  return (
    <button type="button" className={className} onClick={() => clickEvent(label)}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.isRequired,
  className: PropTypes.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

export default Button;
