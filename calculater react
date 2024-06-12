import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const handleKeyPress = (e) => {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
      setInput((prev) => prev + e.key);
    } else if (e.key === 'Enter') {
      handleCalculate();
    } else if (e.key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;






.App {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .calculator {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    text-align: right;
    font-size: 1.5rem;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  
  button {
    height: 40px;
    font-size: 1.2rem;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:active {
    background-color: #ddd;
  }
  96