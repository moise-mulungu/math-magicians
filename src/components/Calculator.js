import React, { PureComponent } from 'react';

export default class Calculator extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="result" />
        <div className="digit-operator">
          <div className="digits">
            <button type="button" className="digit">AC</button>
            <button type="button" className="digit">+/-</button>
            <button type="button" className="digit">%</button>
            <button type="button" className="digit">7</button>
            <button type="button" className="digit">8</button>
            <button type="button" className="digit">9</button>
            <button type="button" className="digit">4</button>
            <button type="button" className="digit">5</button>
            <button type="button" className="digit">6</button>
            <button type="button" className="digit">1</button>
            <button type="button" className="digit">2</button>
            <button type="button" className="digit">3</button>
            <button type="button" className="digit-zero">0</button>
            <button type="button" className="digit">.</button>
          </div>
          <div className="operator">
            <button type="button" className="digit">/</button>
            <button type="button" className="digit">X</button>
            <button type="button" className="digit">-</button>
            <button type="button" className="digit">+</button>
            <button type="button" className="digit">=</button>
          </div>
        </div>

      </div>
    );
  }
}
