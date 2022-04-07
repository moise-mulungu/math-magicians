import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handler = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator-page">
      <h2>Let us do some simple Maths</h2>
      <div className="container">
        <div className="result">
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <div className="digit-operator">
          <div className="digits">
            <button type="button" onClick={handler} className="digit">AC</button>
            <button type="button" onClick={handler} className="digit">+/-</button>
            <button type="button" onClick={handler} className="digit">%</button>
            <button type="button" onClick={handler} className="digit">7</button>
            <button type="button" onClick={handler} className="digit">8</button>
            <button type="button" onClick={handler} className="digit">9</button>
            <button type="button" onClick={handler} className="digit">4</button>
            <button type="button" onClick={handler} className="digit">5</button>
            <button type="button" onClick={handler} className="digit">6</button>
            <button type="button" onClick={handler} className="digit">1</button>
            <button type="button" onClick={handler} className="digit">2</button>
            <button type="button" onClick={handler} className="digit">3</button>
            <button type="button" onClick={handler} className="digit-zero">0</button>
            <button type="button" onClick={handler} className="digit">.</button>
          </div>
          <div className="operator">
            <button type="button" onClick={handler} className="digit">&divide;</button>
            <button type="button" onClick={handler} className="digit">x</button>
            <button type="button" onClick={handler} className="digit">-</button>
            <button type="button" onClick={handler} className="digit">+</button>
            <button type="button" onClick={handler} className="digit">=</button>
          </div>
        </div>

      </div>
    </div>
  );
}
