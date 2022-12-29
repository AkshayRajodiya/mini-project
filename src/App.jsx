import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route />
      </Routes>
      <Outlet />
      <Footer />

    </>
  );
}

export default App;