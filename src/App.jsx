import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Pages/Home";
import Contact from "../src/components/Pages/Contact";
import Login from "../src/components/Pages/Login";
import Register from "../src/components/Pages/Register";
import Nopage from "../src/components/Pages/Nopage";
import About from "../src/components/Pages/About";
import Layoutt from "./Nav/Layoutt";
import Mearn from "./course/Mearn";
import Mean from "./course/Mean";
import Java from "./course/Java";
import Python from "./course/Python";
import Sap from "./course/Sap";
import Offernav from "./offer/Offernav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Routes outside of Layoutt */}
          <Route path="/login" element={<Login />} />
          <Route path="/offer" element={<Offernav />} />


          {/* Routes within Layoutt */}
          <Route element={<Layoutt />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/mern" element={<Mearn />} />
            <Route path="/mean" element={<Mean />} />
            <Route path="/java" element={<Java />} />
            <Route path="/python" element={<Python />} />
            <Route path="/sap" element={<Sap />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
