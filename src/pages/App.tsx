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

    const dispatch  = useDispatch()

  useEffect(()=>{
    dispatch(SongActions.getSongsFetch())
  
  },[dispatch])
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
      
      <Btn onClick={() => navigate(-1)}>Back</Btn>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<AddSong />} />
        <Route path="/EditSong/:id" element={<EditSong />} />
        <Route path="/songs/:id" element={<SongDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;