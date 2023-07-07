import React from 'react';

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
      <input type="text" placeholder="0" value={displayValue} readOnly/>
    </div>
  );
}

export default Screen;
