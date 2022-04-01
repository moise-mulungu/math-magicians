import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="digit-operator">
          <div className="digits">
            <button type="button" onClick={this.handler} className="digit">AC</button>
            <button type="button" onClick={this.handler} className="digit">+/-</button>
            <button type="button" onClick={this.handler} className="digit">%</button>
            <button type="button" onClick={this.handler} className="digit">7</button>
            <button type="button" onClick={this.handler} className="digit">8</button>
            <button type="button" onClick={this.handler} className="digit">9</button>
            <button type="button" onClick={this.handler} className="digit">4</button>
            <button type="button" onClick={this.handler} className="digit">5</button>
            <button type="button" onClick={this.handler} className="digit">6</button>
            <button type="button" onClick={this.handler} className="digit">1</button>
            <button type="button" onClick={this.handler} className="digit">2</button>
            <button type="button" onClick={this.handler} className="digit">3</button>
            <button type="button" onClick={this.handler} className="digit-zero">0</button>
            <button type="button" onClick={this.handler} className="digit">.</button>
          </div>
          <div className="operator">
            <button type="button" onClick={this.handler} className="digit">&divide;</button>
            <button type="button" onClick={this.handler} className="digit">x</button>
            <button type="button" onClick={this.handler} className="digit">-</button>
            <button type="button" onClick={this.handler} className="digit">+</button>
            <button type="button" onClick={this.handler} className="digit">=</button>
          </div>
        </div>

      </div>
    );
  }
}
