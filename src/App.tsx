import React from 'react';
import Navbar from './components/shared/navbar/Navbar';
import Footer from './components/shared/footer/Footer';
import SongList from './components/songs/songList';
import {css} from '@emotion/css'

function App() {
  return (
    <div className={`App`}>
      <Navbar/>
      <SongList/>
      <Footer/>
    </div>
  );
}

export default App;
