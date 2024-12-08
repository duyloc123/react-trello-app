import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

// routes
import AuthRoute from "./routes/AuthRoute";

/*
replace 
Eg: 0, 1, 2, 3, 4 -> 0, 4, 1, 2, 3

swap
Eg: 0, 1, 2, 3, 4 -> 0, 4, 2, 3, 1
*/

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Toast */}
      <ToastContainer />
    </>
  );
}

export default App;
