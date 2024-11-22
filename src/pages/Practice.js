import React, { useState, useEffect, useMemo } from 'react';

function Counter() {
  // State for count
  const [count, setCount] = useState(0);

  // State for input value (to show input behavior)
  const [inputValue, setInputValue] = useState('');

  // useEffect to change the document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useMemo to memoize the result of an expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 2;
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter Example</h1>
      <h2>Count: {count}</h2>
      <h3>Double of Count (Expensive Calculation): {expensiveCalculation}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <div style={{ marginTop: '20px' }}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />
        <p>You typed: {inputValue}</p>
      </div>
    </div>
  );
}

export default Counter;
