import React, { useState, useEffect, useRef } from 'react';
import optionsIcon from '../../assets/options.svg';
import styles from './songs.module.css';
import { Dropdown, DropdownButton, DropdownContent, DropdownItem, StyledImg } from '../../lib/constants';
import { css } from '@emotion/css';
import { Song } from '../../store/slices/songSlice';
import { useNavigate } from 'react-router-dom';





const SongItem = ({song}:{song:Song}) => {
  const [actionsToggle, setActionsToggle] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  const toggleActions = () => {
    setActionsToggle(!actionsToggle);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setActionsToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div  className={styles.songItem}>
      <div className={styles.actions}>
        <Dropdown ref={dropdownRef}>
          <DropdownButton onClick={toggleActions}>
            <img src={optionsIcon} alt="" width={35} />
          </DropdownButton>
          {actionsToggle && (
            <DropdownContent>
              <DropdownItem>View</DropdownItem>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
            </DropdownContent>
          )}
        </Dropdown>
      </div>
      <div onClick={()=>navigate(`/songs/${song.id}`)} className={css({
        display:'flex',
        flexDirection:'row',
        gap:'2rem',
        borderRadius:"10px",
        width:"100%",
        height:"100%",
        ":hover":{
          backgroundColor:"yellow"
        },
        transition:"background-color 0.3s ease"
      })}>
      <div className={css({
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        verticalAlign:'middle'
      })}>
        <StyledImg className={css({
          width:"180px",
          height:"200px",
          margin:"0px"
        })} src={song.cover} alt={song.title} />
      </div>
      <div className={styles.itemInfo}>
        <h1>{song.title}</h1>
        <small>{song.artist}</small>
      </div>
      </div>
    </div>
  );
};

export default SongItem;