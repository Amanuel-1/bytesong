import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AddSong from "../pages/Add";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Home from "./Home";
import EditSong from "./Edit";
import SongDetail from "../components/songs/songDetail";
import NotFound from "../components/ErrorPages/NotFound";
import { SongActions } from "../store/slices/songSlice";
import { css } from "@emotion/css";

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
      <button className={css({
        margin:"1.5rem",
        paddingLeft:"2rem",
        paddingRight:"2rem",
        paddingTop:".5rem",
        paddingBottom:".5rem",
        backgroundColor:"rgba(30,30,30,.6)",
        fontWeight:"bolder",
        borderWidth:"0px",
        ":hover":{
          cursor:"pointer"
        }
      })} onClick={() => navigate(-1)}>Back</button>
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