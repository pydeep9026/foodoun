import React, { useState } from 'react';
import {useNavigate  } from 'react-router-dom';
import Header from './components/header';
import toast, { Toaster} from 'react-hot-toast';
import { logos } from './assets/assets';

const logo=logos.foodoun

const LoginPage = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    if (username === 'shivanshu' && password === 'pass') {
        navigate('/');
    } else {
        e.preventDefault();
      toast.error('Invalid username or password');
    }
  };

  return (
    <>
    <Toaster
    toastOptions={{
        className: '',
        style: {
          zIndex: "10000",
        },
      }}
    
    />
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Foodoun Logo" className="header-logo" />
        <h1 className="header-title">Foodoun</h1>
        </div>
    </header>
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Welcome back!</h2>
        <form>
          <label className="login-label">
            Username:
            <input placeholder='enter username' className="login-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label className="login-label">
            Password:
            <input placeholder='enter password' className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className="login-button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  </>
);
};

export default LoginPage;
