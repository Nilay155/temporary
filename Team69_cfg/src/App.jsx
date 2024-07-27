import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Login from './loginpage';
import Registrationuser from './Registrationformuser';
import Registrationflw from './Registrationformflw';
import Navbar from './Navbar';
//import ngopic from '../src/assets/ngoimage.jpg';
import { Link } from 'react-router-dom';


const DashboardLayout = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div className="flex flex-row justify-center items-center mt-40">
                <div>
                  {/* <img src={ngopic} className="h-80 mt-40 mr-3" /> */}
                </div>
                <div>
                  <div className="flex flex-col ">
                    <Link to="/registrationflw">
                  <button className='mt-20 text-3xl border-stone-500 bg-yellow-600 rounded-xl p-6 font-serif hover:text-sky-200 transition-transform hover:scale-125 '>REGISTER AS FLW</button>
                  </Link>
                  <Link to="/registrationuser">
                  <button className='mt-20 text-3xl border-stone-500 bg-yellow-600 rounded-xl p-6 font-serif hover:text-sky-200 transition-transform hover:scale-125'>REGISTER AS USER</button>
                  </Link>
                 
                  </div>


                </div>
              </div>

            </>
          } />
          <Route path="/registrationuser" element={<Registrationuser />} />
          <Route path="/registrationflw" element={<Registrationflw />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={
            <>
              <Sidebar />
              <Dashboard />
            </>
          } /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default DashboardLayout;
