import React, { useState, useEffect } from 'react';
import './Accordion.css';

function Accordion() {
  const [questions, setQuestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => alert('Failed to copy: ', err));
  };

  return (
    <div className="accordion">
      <h1>React Interview Questions</h1>
      {questions.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" onClick={() => handleClick(index)}>
            {item.question}
            <span className={`accordion-icon ${activeIndex === index ? 'active' : ''}`}>▼</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-body">
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              <pre>
                <code>{item.code}</code>
              </pre>
              <button className="copy-button" onClick={() => copyToClipboard(item.code)}>
                Copy Code
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
