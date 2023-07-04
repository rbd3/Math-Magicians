import React from 'react';

function Button({ label, className }) {
  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}

export default Button;
