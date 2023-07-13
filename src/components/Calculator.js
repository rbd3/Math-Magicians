import React, { useState } from 'react';
import './Calculator.css';
import Screen from './Screen';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  function handleClick(buttonName) {
    const solution = calculate(state, buttonName);
    setState({
      total: solution.total,
      next: solution.next,
      operation: solution.operation,
    });
  }

  const { total, next, operation } = state;

  return (
    <div>
      <p className="intro">Let&apos;s do some math!</p>
      <div className="calculator">
        <Screen total={total} next={next} operation={operation} />
        <Button label="AC" clickEvent={() => handleClick('AC')} />
        <Button label="+/-" clickEvent={() => handleClick('+/-')} />
        <Button label="%" clickEvent={() => handleClick('%')} />
        <Button label="÷" className="box-color" clickEvent={() => handleClick('÷')} />

        <Button label="1" clickEvent={() => handleClick('1')} />
        <Button label="2" clickEvent={() => handleClick('2')} />
        <Button label="3" clickEvent={() => handleClick('3')} />
        <Button label="+" className="box-color" clickEvent={() => handleClick('+')} />

        <Button label="4" clickEvent={() => handleClick('4')} />
        <Button label="5" clickEvent={() => handleClick('5')} />
        <Button label="6" clickEvent={() => handleClick('6')} />
        <Button label="x" className="box-color" clickEvent={() => handleClick('x')} />

        <Button label="7" clickEvent={() => handleClick('7')} />
        <Button label="8" clickEvent={() => handleClick('8')} />
        <Button label="9" clickEvent={() => handleClick('9')} />
        <Button label="-" className="box-color" clickEvent={() => handleClick('-')} />

        <Button label="0" className="span-box" clickEvent={() => handleClick('0')} />

        <Button label="." clickEvent={() => handleClick('.')} />
        <Button label="=" className="box-color" clickEvent={() => handleClick('=')} />
    </div>
    </div>    
  );
}

export default Calculator;
