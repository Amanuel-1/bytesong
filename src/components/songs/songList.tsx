
import styles from './songs.module.css'
import styled from '@emotion/styled'
import optionsIcon from '../../assets/options.svg'
import {css} from '@emotion/css'
import SongItem from './songItem'
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Song, getSongsFetch, rootState } from '../../store/songSlice'
import songsReducer from '../../store/songSlice'


const StyledImg  =  styled.img`
              width:140px;
              height:100%;
              object-fit:cover;
              background-color:rgb(30,30,30);
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;

            `

const SongList = () => {

  const songs = useSelector((state:rootState)=>state.songs)
  const dispatch  = useDispatch()

  useEffect(()=>{
      dispatch(getSongsFetch())
      console.log("songs",songs)
  },[dispatch])

  

  return (
    <div className={styles.songPannel}>
       {
        songs?(songs.map((song:Song,index:number)=>(
          <SongItem key={index} song={song} />
       ))):(
        <h1>oops no song found</h1>
       )
       }
       
    </div>
  )
}

export default SongList