import React from 'react'
import SongList from '../components/songs/songList';
import SongItem from '../components/songs/songItem';
import SongDetail from '../components/songs/songDetail';
import { css } from '@emotion/css';

const AddSong = () => {
  return (
    <div className= {css({
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      verticalAlign:'middle'
    })} >
        <SongDetail/>
    </div>
  )
}

export default AddSong