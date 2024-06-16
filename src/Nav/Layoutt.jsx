import React from 'react';
import { Outlet } from 'react-router-dom';
import Navv from '../Nav/Navv';
import Header from '../Nav/Header';
import Footer from '../Nav/Footer';
import Pop from '../Pop_up/Pop';

const Layoutt = () => {
  return (
    <>
      <Navv />
      <Header />
      <div>
        <Outlet /> {/* This is where nested routes will render */}
      </div>
      <Footer />
      <Pop />
    </>
  );
};

export default Layoutt;
