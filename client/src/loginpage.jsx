import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default to admin
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const response = await fetch('http://your-backend-url/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, role }),
    });

    if (response.ok) {
      const data = await response.json();
      // Handle successful login
      navigate('/dashboard');
    } else {
      // Handle login failure
      setError('Invalid login credentials');
    }
  };
  return (
    <div id="login" className="flex justify-center items-center min-h-screen bg-sky-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">LOGIN</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Login as</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor="admin" className="mr-4">Admin</label>
              <input
                type="radio"
                id="flw"
                name="role"
                value="flw"
                checked={role === 'flw'}
                onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor="flw">FLW</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-yellow-600 text-black rounded hover:bg-yellow-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
