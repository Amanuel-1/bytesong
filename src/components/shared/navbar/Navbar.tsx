import React from 'react'
import {css} from '@emotion/css'
import { Logo } from './Logo'
import styles from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Btn } from '../../../lib/constants'
const Navbar = () => {

  const songs  = useSelector((state:any)=>state.songsList.songs)
  const lastId = useSelector((state:any)=>state.songsList.lastId)
  const navigate = useNavigate()

  return (
    <div
    className={css`
    background-color:rgba(34, 24, 13, 0.658);
    position:sticky;
    top:0;
    padding-left:0;
    width:100vw;
    text:green;
    display:flex;
    gap:4px;
    justify-content : space-between;
    backdrop-filter:blur(4px);
    z-index:50;
    

    `}
    >
      <Link to="/"><Logo/></Link>

      
      <Btn onClick={()=>navigate("/add")}  className={styles.navbutton}>➕{lastId+"-lastId "+songs.length} Add Song</Btn>
      
    </div>
  )
}

export default Navbar