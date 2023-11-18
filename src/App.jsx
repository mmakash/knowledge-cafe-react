import React from 'react';
import Header from './Component/Header';
import Card from './Component/Card';
// Import ToastContainer
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Header />
      <Card />
      <ToastContainer />
    </div>
  );
};

export default App;