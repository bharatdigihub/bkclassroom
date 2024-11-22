import React, { useState } from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: 'Arial', sans-serif;
  padding: 20px 0;
`;

const Form = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${props => (props.disabled ? '#ccc' : '#007bff')};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => (props.disabled ? '#ccc' : '#0056b3')};
  }
`;

const Message = styled.p`
  text-align: center;
  color: ${props => (props.error ? 'red' : 'green')};
  margin-top: 20px;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
        setEmail('');
        setPassword('');
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('An error occurred during login.');
    }

    setLoading(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </InputGroup>

        <Button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#fff"} /> : 'Login'}
        </Button>

        {message && <Message error={message.startsWith('Error')}>{message}</Message>}
      </Form>
    </Container>
  );
}

export default Login;
