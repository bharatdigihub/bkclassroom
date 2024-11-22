import React, { useState } from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';  // Import spinner

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align items at the top */
  min-height: 100vh; /* Full viewport height */
  background-color: #f0f2f5;
  font-family: 'Arial', sans-serif;
  padding: 20px 0; /* No bottom padding */
`;

const Form = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  margin-bottom: 20px; /* Gap between form and footer */
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
  background-color: ${props => (props.disabled ? '#ccc' : '#007bff')}; /* Disable button during loading */
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

const ImagePreview = styled.img`
  margin-top: 10px;
  max-width: 80px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  color: #777;
`;

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);  // State for loading

  const validateForm = () => {
    // Validate Name
    if (name.trim().length < 2) {
      setMessage('Name must be at least 2 characters long.');
      return false;
    }

    // Validate Email using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.');
      return false;
    }

    // Validate Password (minimum 6 characters)
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return false;
    }

    // Validate Image (optional check for image type)
    if (image && !['image/jpeg', 'image/png'].includes(image.type)) {
      setMessage('Please upload a valid image (JPEG or PNG).');
      return false;
    }

    return true; // Form is valid
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);  // Start loading

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/registration', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('User registered successfully!');
        setName('');
        setEmail('');
        setPassword('');
        setImage(null);
        setImagePreview(null);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('An error occurred during registration.');
    }

    setLoading(false);  // Stop loading
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>

        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </InputGroup>

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

        <InputGroup>
          <Label htmlFor="image">Profile Image</Label>
          <Input 
            type="file" 
            id="image" 
            accept="image/*"
            onChange={handleImageChange}
          />
        </InputGroup>

        {imagePreview && <ImagePreview src={imagePreview} alt="Image Preview" />}

        <Button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#fff"} /> : 'Register'}
        </Button>
        
        {message && <Message error={message.startsWith('Error')}>{message}</Message>}
      </Form>

    </Container>
  );
}

export default Registration;
