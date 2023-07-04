import React from 'react';

function Button({ label, className }) {
  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.isRequired,
  className: PropTypes.isRequired,
};

export default Button;
