import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Footer from './components/Footer';
import Practice from './pages/Practice';
import Interviewquestion from './pages/Interview-questions'; // Import the Accordion component
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/interview-questions" element={<Interviewquestion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer /> {/* Place Footer here to ensure it shows on all pages */}
    </Router>
  );

};






export default App;
