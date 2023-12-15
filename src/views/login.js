// src/App.js
import React, { useState } from 'react';
import './login.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="App">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
