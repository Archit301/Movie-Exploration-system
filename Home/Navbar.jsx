import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = ({ currentUser, setCurrentUser }) => {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    history.push('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">CineVoyage</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-xl font-bold">Home</Link>
          <Link to="/discover" className="text-xl font-bold">Discover</Link>
          <Link to="/community" className="text-xl font-bold">Community</Link>
          <Link to="/top-picks" className="text-xl font-bold">Top Picks</Link>
          <Link to="/my-collection" className="text-xl font-bold">My Collection</Link>
        </div>
        <div className="flex space-x-4">
          {currentUser ? (
            <>
              <span className="text-xl font-bold">Welcome, {currentUser}</span>
              <button onClick={handleLogout} className="text-xl font-bold bg-red-600 py-1 px-3 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/signup" className="text-xl font-bold">Signup</Link>
              <Link to="/login" className="text-xl font-bold">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};



