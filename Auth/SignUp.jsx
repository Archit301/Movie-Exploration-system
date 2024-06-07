import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleSubmit = () => {
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    history.push('/login');
  };

  return (
    <div className=" mx-auto px-4 py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Sign Up</button>
      </form>
      <p className="text-gray-600 mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link></p>
    </div>
  </div>
  );
};

export default Signup;
