import React, { useEffect } from 'react'
import SongList from '../components/songs/songList'
import { useDispatch, useSelector } from 'react-redux'
import { Song, SongActions } from '../store/slices/songSlice'
import { Loading, SongContainer, StatusBar } from '../lib/constants'
import { css } from '@emotion/css'

const Home = () => {
  const dispatch  = useDispatch()
  let songs:Song[] = useSelector((state:any)=>state.songsList.songs)
  let isLoading:boolean= useSelector((state:any)=>state.songsList.isLoading)


  useEffect(()=>{
    // dispatch(SongActions.getSongsFetch())
    if(!songs.length){
      dispatch(SongActions.getSongsFetch())
    }
  
  },[dispatch])
  return (
    <SongContainer>
      {        
      isLoading &&<Loading>
              loading
                </Loading>}
      <SongList/>
    </SongContainer>
  )
}

export default Home