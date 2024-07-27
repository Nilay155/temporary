import React, { useState } from 'react';

const Registrationuser = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    income: '',
    religion: '',
    caste: '',
    phoneNumber: '',
    houseOwned: '',
    maritalStatus: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    const orderedData = {
      name: formData.name,
      religion: formData.religion,
      income: formData.income,
      gender: formData.gender,
      caste: formData.caste,
      maritalStatus: formData. maritalStatus==='married'?true:false,
      age: formData.age,
      houseOwned: formData.houseOwned==='yes'?true:false,
      phoneNumber: formData.phoneNumber,
    };

    console.log('Ordered Data:', orderedData);

    const url = 'http://localhost:8000/api/users/register-user';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderedData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Response Data:', data);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
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
            <label htmlFor="age" className="w-40 text-slate-800 font-medium">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="income" className="w-40 text-slate-800 font-medium">Income</label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="religion" className="w-40 text-slate-800 font-medium">Religion</label>
            <input
              type="text"
              id="religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="caste" className="w-40 text-slate-800 font-medium">Caste</label>
            <input
              type="text"
              id="caste"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="phone" className="w-40 text-slate-800 font-medium">Phone No</label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="houseOwned" className="w-40 text-slate-800 font-medium">House Owned</label>
            <select
              id="houseOwned"
              name="houseOwned"
              value={formData.houseOwned}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex items-center mb-6">
            <label htmlFor="maritalStatus" className="w-40 text-slate-800 font-medium">Marital Status</label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            >
              <option value="">Select...</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-800 transition duration-300 ease-in-out"
          >

            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registrationuser;
