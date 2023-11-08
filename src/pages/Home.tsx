import React, { useEffect } from 'react'
import SongList from '../components/songs/songList'
import { useDispatch } from 'react-redux'
import { SongActions } from '../store/slices/songSlice'

const Home = () => {
  const dispatch  = useDispatch()

  useEffect(()=>{
    dispatch(SongActions.getSongsFetch())
  
  },[dispatch])
  return (
    <SongList/>
  )
}

export default Home