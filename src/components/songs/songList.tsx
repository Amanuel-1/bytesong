
import styles from './songs.module.css'
import styled from '@emotion/styled'
import optionsIcon from '../../assets/options.svg'
import {css} from '@emotion/css'
import SongItem from './songItem'
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Song,SongActions,rootState } from '../../store/slices/songSlice'
import songsReducer from '../../store/slices/songSlice'


const StyledImg  =  styled.img`
              width:140px;
              height:100%;
              object-fit:cover;
              background-color:rgb(30,30,30);
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;

            `

const SongList = () => {
  const songs  = useSelector((state:any)=>state.songsList.songs)

  console.log("so these are the songs 😎 :",songs)

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