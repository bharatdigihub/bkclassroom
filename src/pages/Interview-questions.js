import React, { useState } from 'react';
import Counter from './Counter'; // Import Counter component
import ExampleWithEffect from './ExampleWithEffect'; // Import ExampleWithEffect component
import './Accordion.css'; // Import CSS file for styling

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  // List of questions with answers and example codes
  const items = [
    {
      question: 'How does useState work in React?',
      answer: (
        <div>
          <p><strong>useState</strong> is a hook that lets you add state to functional components.</p>
          <Counter /> {/* Rendering Counter component as example */}
        </div>
      ),
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{'{count}'}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`
    },
    {
      question: 'How does useEffect work in React?',
      answer: (
        <div>
          <p><strong>useEffect</strong> is a hook that lets you perform side effects in functional components.</p>
          <ExampleWithEffect /> {/* Another example */}
        </div>
      ),
      code: `import React, { useState, useEffect } from 'react';

function ExampleWithEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h1>{'{count}'}</h1>
      <button onClick={() => setCount(count + 1)}>Increment (Changes Document Title)</button>
    </div>
  );
}

export default ExampleWithEffect;`
    },
    {
      question: 'What is a functional component?',
      answer: (
        <div>
          <p>A <strong>functional component</strong> is a JavaScript function that returns a React element. They are simpler and easier to read than class components.</p>
          <pre>
            <code>{`import React from 'react';

function Greeting() {
  return <h1>Hello, World!</h1>;
}

export default Greeting;`}</code>
          </pre>
        </div>
      ),
      code: `import React from 'react';

function Greeting() {
  return <h1>Hello, World!</h1>;
}

export default Greeting;`
    },
    {
      question: 'What are props in React?',
      answer: (
        <div>
          <p><strong>Props</strong> (short for properties) are a way to pass data from parent to child components in React.</p>
          <pre>
            <code>{`import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;`}</code>
          </pre>
        </div>
      ),
      code: `import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;`
    },
    {
      question: 'What is the difference between state and props?',
      answer: (
        <div>
          <p><strong>State</strong> is managed within the component and can change, while <strong>props</strong> are passed to the component from a parent and are immutable.</p>
        </div>
      ),
      code: `// State Example
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Props Example
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}` 
    },
    {
      question: 'What is the purpose of keys in React?',
      answer: (
        <div>
          <p><strong>Keys</strong> are used to uniquely identify elements in a list, helping React optimize rendering.</p>
          <pre>
            <code>{`import React from 'react';

const items = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default FruitList;`}</code>
          </pre>
        </div>
      ),
      code: `import React from 'react';

const items = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default FruitList;`
    },
    {
      question: 'How do you handle forms in React?',
      answer: (
        <div>
          <p>Forms in React can be handled using controlled components where the form data is stored in the state.</p>
          <pre>
            <code>{`import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;`}</code>
          </pre>
        </div>
      ),
      code: `import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;`
    },
    {
      question: 'What are controlled and uncontrolled components?',
      answer: (
        <div>
          <p><strong>Controlled components</strong> are those where the form data is controlled by React state, while <strong>uncontrolled components</strong> maintain their own state.</p>
        </div>
      ),
      code: `// Controlled Component Example
import React, { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} />
  );
}

// Uncontrolled Component Example
function UncontrolledInput() {
  const inputRef = React.createRef();

  const handleSubmit = () => {
    alert('A name was submitted: ' + inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}` 
    },
    {
      question: 'How do you manage side effects in React?',
      answer: (
        <div>
          <p>Side effects in React can be managed using the <strong>useEffect</strong> hook.</p>
        </div>
      ),
      code: `import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Example;` 
    },
    {
      question: 'What is context in React?',
      answer: (
        <div>
          <p><strong>Context</strong> provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
        </div>
      ),
      code: `import React, { createContext, useContext } from 'react';

const MyContext = createContext('default value');

function Parent() {
  return (
    <MyContext.Provider value="Hello from Context">
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const value = useContext(MyContext);
  return <h1>{value}</h1>;
}

export default Parent;`
    },
    {
      question: 'What are higher-order components (HOCs)?',
      answer: (
        <div>
          <p>A <strong>higher-order component</strong> is a function that takes a component and returns a new component, allowing code reuse.</p>
        </div>
      ),
      code: `import React from 'react';

function withExtraInfo(WrappedComponent) {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} extraInfo="Some Extra Info" />;
  };
}

function MyComponent(props) {
  return <div>{props.extraInfo}</div>;
}

export default withExtraInfo(MyComponent);`
    },
    {
      question: 'What is React Router?',
      answer: (
        <div>
          <p><strong>React Router</strong> is a library for routing in React applications, allowing navigation between different components.</p>
        </div>
      ),
      code: `import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;`
    },
  ];

  // Toggle accordion item
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy: ', err);
    });
  };

  return (
    <div className="accordion">
      <h1>React Interview Questions </h1>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleClick(index)}
          >
            {item.question}
            <span className={`accordion-icon ${activeIndex === index ? 'active' : ''}`}>▼</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-body">
              <div>{item.answer}</div>
              <pre>
                <code>{item.code}</code>
              </pre>
              <button
                className="copy-button"
                onClick={() => copyToClipboard(item.code)}
              >
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
