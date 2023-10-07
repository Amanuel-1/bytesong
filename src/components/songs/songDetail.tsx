import { css } from '@emotion/css';
import React from 'react';
import styles from './songs.module.css';
import { StyledImg } from '../../lib/constants';

const SongDetail = () => {
  return (
    <section
      className={css({
        width: '96%',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '1rem',
        marginBottom: '1rem',
        backgroundColor: 'rgba(250,250,255,1)',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '10px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
          // Add styles for screens up to 768px wide
          width: '100%',
          borderRadius:"1px",
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        
      })}
    >
      <div className={styles.imageColumn}>
        <StyledImg
          className={styles.songImage}
          src="https://forum.plasmic.app/user_avatar/forum.plasmic.app/chungwu/45/25_2.png"
          alt="Song Cover"
        />
      </div>
      <div className={styles.detailsColumn}>
        <div className={css({
          marginBottom:"10px",
          borderBottom: '2px solid black',
        })}>
          <h1 >Title One</h1>
        </div>
        <div className="artist">
          <h2 className={styles.artistName}>Artist Name</h2>
          <p className={styles.artistDescription}>
            Description about the artist...
          </p>
        </div>
        <div className="description">
          <h2 className={styles.descriptionHeading}>Description</h2>
          <p className={styles.songDescription}>
            This is a sample description about the song. It provides some information and details about the song, such as its genre, themes, and any notable features or collaborations. This description helps the listeners to understand and appreciate the song better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SongDetail;