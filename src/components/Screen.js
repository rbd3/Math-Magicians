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

Screen.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Screen;
