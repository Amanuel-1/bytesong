import React, { useEffect } from 'react'
import SongList from '../components/songs/songList'
import { useDispatch, useSelector } from 'react-redux'
import { Song, SongActions } from '../store/slices/songSlice'
import { Loading, SongContainer, StatusBar } from '../lib/constants'
import { css } from '@emotion/css'
import loader from '../assets/loader.svg'

const Home = () => {
  const dispatch  = useDispatch()
  let songs:Song[] = useSelector((state:any)=>state.songsList.songs)
  let isLoading:boolean= useSelector((state:any)=>state.songsList.isLoading)


  useEffect(()=>{

      dispatch(SongActions.getSongsFetch())
  
  
  },[dispatch])
  return (
    <SongContainer>
      {        
      isLoading &&<Loading>
              <img className={css({
                placeSelf:'center'
              })} src={loader} alt='' width={150} height={150}/>
                </Loading>}
      <SongList/>
    </SongContainer>
  )
}

export default Home