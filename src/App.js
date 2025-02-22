import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Calculator</h1>
      <div style={styles.display}>{input}</div>
      <div style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)} style={styles.button}>{item}</button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)} style={styles.button}>{item}</button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)} style={styles.button}>{item}</button>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <button key={item} onClick={item === '=' ? handleCalculate : () => handleButtonClick(item)} style={styles.button}>{item}</button>
        ))}
        <button onClick={handleClear} style={{ ...styles.button, backgroundColor: 'red' }}>C</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  display: {
    fontSize: '32px',
    margin: '20px',
    minHeight: '40px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  button: {
    padding: '20px',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default App;