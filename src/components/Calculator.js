import React from 'react';
import './Calculator.css';
import Screen from './Screen';
import Button from './Button';

function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" className="box-color" />

      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" className="box-color" />

      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="*" className="box-color" />

      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="-" className="box-color" />

      <Button label="0" className="span-box" />

      <Button label="." />
      <Button label="=" className="box-color" />
    </div>
  );
}

export default Calculator;
