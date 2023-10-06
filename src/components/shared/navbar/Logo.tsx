
import styles from '../navbar/navbar.module.css'
import React from 'react'
import logo from '../../../assets/logo.png'

export const Logo = () => {
  return (

    <div className={styles.logo}>
      <img src={logo} alt="logo" />
      <h3> Bytesong</h3>
    </div>
  )
}
