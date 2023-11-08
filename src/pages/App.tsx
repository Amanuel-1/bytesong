import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Routes, Route, useNavigate } from "react-router-dom";
import AddSong from "../pages/Add";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Home from "./Home";
import EditSong from "./Edit";
import SongDetail from "./songDetail";
import NotFound from "../components/ErrorPages/NotFound";
import { SongActions } from "../store/slices/songSlice";

import styled from "@emotion/styled";
import { Btn } from "../lib/constants";



const App = () => {


  return (
    
      <>
      <Navbar />
      <AppRoutes />
      <Footer />
      </>
    
  );
};

const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <>
      
      <Btn onClick={() => navigate(-2)}>Back</Btn>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSong />} />
        <Route path="/editSong/:id" element={<EditSong />} />
        <Route path="/songs/:id" element={<SongDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;