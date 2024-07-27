import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registrationflw = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    region: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await fetch("http://localhost:8000/api/workers/register-worker",{
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(formData)
      })

      const data = await response.json()
      console.log(data);

      if(response.ok) {
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
      alert("Please Try Again to Register")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">REGISTRATION FORM</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="w-40 text-slate-800 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="username" className="w-40 text-slate-800 font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="password" className="w-40 text-slate-800 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="email" className="w-40 text-slate-800 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="phoneNumber" className="w-40 text-slate-800 font-medium">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-6">
            <label htmlFor="region" className="w-40 text-slate-800 font-medium">Region</label>
            <input
              type="text"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <button
            className="w-full p-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-800 transition duration-300 ease-in-out"
          onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registrationflw;
