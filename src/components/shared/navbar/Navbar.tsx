import React from 'react'
import {css} from '@emotion/css'
import { Logo } from './Logo'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <div
    className={css`
    background-color:rgba(200,100,100,0.2);
    position:sticky;
    top:0;
    padding-left:0;
    width:100vw;
    text:green;
    display:flex;
    gap:4px;
    justify-content : space-between;
    backdrop-filter:blur(4px);
    

    `}
    >
      <Logo/>

      <button className={styles.navbutton}>Add Song</button>
    </div>
  )
}

export default Navbar