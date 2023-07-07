import React from 'react';
import PropTypes from 'prop-types';

function Screen({ total, next, operation }) {
  let displayValue = '';

  if (total) {
    displayValue += total;
  }

  if (operation) {
    displayValue += ` ${operation}`;
  }

  if (next) {
    displayValue += ` ${next}`;
  }

  if (displayValue === '') {
    displayValue = '0';
  }

  return (
    <div className="screen">
      <input type="text" placeholder="0" value={displayValue} readOnly />
    </div>
  );
}

Screen.prototype = {
  total: PropTypes.isRequired,
  next: PropTypes.isRequired,
  operation: PropTypes.isRequired,
};

export default Screen;
