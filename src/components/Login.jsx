import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from './AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {  setLoginStatus} = useAuth(); // Destructure the values from useAuth
  const navigate = useNavigate();
  const [login,setLogin] =useState('');
  // const [setName] = useAuth('');
  // const [setPass] = useAuth('');

  const handleLogin = async () => {
    try {
      // const response = await fetch('http://localhost:3002/login', {
      const response = await fetch('https://server-aimq.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const a=await response.json();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        // setName(a.username);
        // setPass(a.password);
        setLoginStatus(username);
        console.log(a.username);
        console.log('Login successful');
        // setName(username);
        // // setPass(password);
        // const a=await response.json();
        // setData(a);

        // Redirect to the home page upon successful login
        navigate('/');
      } else {
        setLogin('failure');
        setLoginStatus('failure');
        console.error('Login failed');
      }
    } catch (error) {
      setLoginStatus('failure');
      console.error(error);
    }
    
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mt-24 lg:mt-6 mx-auto p-5 ">
    <div className=" lg:mx-5 lg:mt-6">
      <h1 className="text-grey-600 font-bold  py-5 text-2xl lg:text-3xl text-left">
          Log <span className="text-blue-500">In</span>
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
            <div className="button-group">
              <button type="button" className="bg-blue-400 hover:bg-blue-500" onClick={handleLogin}>
                Login
              </button>
              <Link to="/register">
                <button type="button" className="bg-blue-400 hover:bg-blue-500">
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
          {login === 'failure' && (
            <p className="text-red-500">Login failed. Please check your credentials.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
