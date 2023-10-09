import { css } from '@emotion/css';
import styles from '../components/songs/songs.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Song } from '../store/slices/songSlice';
import { useDispatch } from 'react-redux';

const SongDetail = () => {

const {id} = useParams()
let songId:number  = parseInt(id as string)??0
const songs:Array<Song>  = useSelector((state:any)=>state.songsList.songs)
const dispatch = useDispatch()
const song= songs.find((s)=>s.id == songId)




  return songId?( <section
    className={css({
      width: '96%',
      margin:'auto',
      marginBottom:'6rem',
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
      <div className={styles.imageWrapper}>
      <img className={styles.songImage}
        src={song?.cover}
        alt={song?.title}
        height="370px"
        width="100%"
      />
      </div>
    </div>
    <div className={styles.detailsColumn}>
      <div className={css({
        marginBottom:"10px",
        borderBottom: '2px solid black',
      })}>
        <h1 >{song?.title}</h1>
      </div>
      <div className="artist">
        <h2 className={styles.artistName}>{song?.artist}</h2>
      </div>
      <div className="description">
        <h2 className={styles.descriptionHeading}>Description</h2>
        <p className={styles.songDescription}>
          {song?.description}
        </p>
      </div>
    </div>
  </section>
  ):(
    <div className={css({
      fontSize:"100px",
      fontWeight:"bolder"
    })}>Oops Wrong Page</div>
      )
  
};

export default SongDetail;