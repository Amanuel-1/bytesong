
import styles from './songs.module.css'
import styled from '@emotion/styled'
import optionsIcon from '../../assets/options.svg'
import {css} from '@emotion/css'
import SongItem from './songItem'

const StyledImg  =  styled.img`
              width:140px;
              height:100%;
              object-fit:cover;
              background-color:rgb(30,30,30);
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;

            `

const SongList = () => {

  return (
    <div className={styles.songPannel}>
       <SongItem/>
       <SongItem/>
       <SongItem/>
       <SongItem/>
       <SongItem/>
       <SongItem/>
       <SongItem/>
    </div>
  )
}

export default SongList