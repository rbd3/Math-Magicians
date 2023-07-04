import React from 'react';

function Button({ label, className }) {
  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

export default Button;
