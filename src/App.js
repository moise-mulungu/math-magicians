import React, { PureComponent } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>

    );
  }
}

export default App;
