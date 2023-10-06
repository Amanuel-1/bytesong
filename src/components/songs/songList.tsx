import React from 'react'
import styles from './songs.module.css'
import styled from '@emotion/styled'

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
        <div className={styles.songItem}>
            <div className={styles.actions}>
              actions
            </div>
            <div className={styles.imageWrapper}>
                <StyledImg src={require('../../assets/logo.png')} alt="image" />
            </div>
          <div className={styles.itemInfo}>
            <h1>Song One</h1>
            <small>Artist Abebe</small>
          </div>
          <div className="actions"></div>
        </div>
        <div className={styles.songItem}>
            <div className={styles.imageWrapper}>
                <StyledImg src={require('../../assets/logo.png')} alt="image" />
            </div>
          <div className={styles.itemInfo}>
            <h1>Song One</h1>
            <small>Artist Abebe</small>
          </div>
          <div className="actions"></div>
        </div>

        <div className={styles.songItem}>
        <div className={styles.imageWrapper}>
              <StyledImg src={require('../../assets/logo.png')} alt="image" />
          </div>
          <div className={styles.itemInfo}>
            <h1>Song One</h1>
            <small>Artist Abebe</small>
          </div>
          <div className="actions"></div>
        </div>
        <div className={styles.songItem}>
            <div className={styles.imageWrapper}>
                <StyledImg src={require('../../assets/logo.png')} alt="image" />
            </div>
          <div className={styles.itemInfo}>
            <h1>Song One</h1>
            <small>Artist Abebe</small>
          </div>
          <div className="actions"></div>
        </div>

        <div className={styles.songItem}>
        <div className={styles.imageWrapper}>
              <StyledImg src={require('../../assets/logo.png')} alt="image" />
          </div>
          <div className={styles.itemInfo}>
            <h1>Song One</h1>
            <small>Artist Abebe</small>
          </div>
          <div className="actions"></div>
        </div>
        <div className={styles.songItem}>
            <div className={styles.imageWrapper}>
                <StyledImg src={require('../../assets/logo.png')} alt="image" />
            </div>
          <div className={styles.itemInfo}>
            <h1>Song One</h1>
            <small>Artist Abebe</small>
          </div>
          <div className="actions"></div>
        </div>
       
        
    </div>
  )
}

export default SongList