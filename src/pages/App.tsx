import React from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddSong from "../pages/Add"
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Home from "./Home";
import EditSong from "./Edit";
import SongDetail from "../components/songs/songDetail";



const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Add" element={<AddSong/>} />
        <Route path="/EditSong/:id" element={<EditSong/>} />
        <Route path="/ViewSong/:id" element={<SongDetail/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;