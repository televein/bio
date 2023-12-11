// Register.jsx
import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // const response = await fetch('http://localhost:3002/register', {
      const response = await fetch('https://server-aimq.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setRegistrationStatus('success');
        console.log('User registered successfully');

        // Navigate to the login page upon successful registration
        navigate('/login');
      } else {
        setRegistrationStatus('failure');
        console.error('Registration failed');
      }
    } catch (error) {
      setRegistrationStatus('failure');
      console.error(error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
<div className="container mt-24 lg:mt-6 mx-auto p-5 ">
      <div className=" lg:mx-5 lg:mt-6">
        <h1 className="text-grey-600 font-bold text-2xl lg:text-3xl text-left py-5">
          Sign <span className="text-blue-500">Up</span>
        </h1>
        <hr />
        <div className="login-container">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="bg-blue-400 hover:bg-blue-500" onClick={handleRegister}>
              Register
            </button>
          </form>
          {registrationStatus === 'success' && (
            <p className="text-green-500">User registered successfully!</p>
          )}
          {registrationStatus === 'failure' && (
            <p className="text-red-500">Registration failed. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
