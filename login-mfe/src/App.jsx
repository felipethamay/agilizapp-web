import React from 'react';
import { ToastContainer } from "react-toastify";
import LoginScreen from './components/LoginScreen';

const App = () => (
  <div>
    <ToastContainer position="top-right" autoClose={5000} />
    <LoginScreen />
  </div>
);

export default App;
