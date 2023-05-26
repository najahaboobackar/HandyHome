import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Otp from '../Otp/Otp';
import './Signup.css'

function Signup() {
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(true);

  const handleSubmit = () => {
    setIsLoggedin(!isLoggedin);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    validateInputs(value, mail, password);
  };

  const handleMailChange = (event) => {
    const value = event.target.value;
    setMail(value);
    validateInputs(username, value, password);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    validateInputs(username, mail, value);
  };

  const validateInputs = (username, mail, password) => {
    if (username && mail && password && mail.length >= 13) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {isLoggedin ? (
        <div className="flex flex-col items-center mt-8">
          <img src={logo} alt="logo" className="mb-4" />
          <div className="bg-white p-8">
          <h1 className="font-bold text-2xl mb-4">Log In Or Sign Up</h1>
            
            <input
              type="text"
              className="name"
              onChange={handleUsernameChange}
              placeholder="Username"
            />
            <input
              type="text"
              className="mail"
              onChange={handleMailChange}
              placeholder="Mail ID"
            />
            <input
              type="text"
              className="password"
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <button
            className={'sign'}
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            Sign Up
          </button> 
          <h3 className='exist'>Already have an account? </h3> 
          </div>
        </div>
      ) : (
        <Otp />
      )}
    </div>
  );
}

export default Signup;
