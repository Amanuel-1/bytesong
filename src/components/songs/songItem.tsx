import React, { useState, useEffect, useRef } from 'react';
import optionsIcon from '../../assets/options.svg';
import styles from './songs.module.css';
import { Dropdown, DropdownButton, DropdownContent, DropdownItem, StyledImg } from '../../lib/constants';
import { css } from '@emotion/css';





const SongItem: React.FC = () => {
  const [actionsToggle, setActionsToggle] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <div className={styles.songItem}>
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
      <div className={styles.imageWrapper}>
        <StyledImg className={css({
          width:"120px",
          height:"100%"
        })} src={require('../../assets/logo.png')} alt="image" />
      </div>
      <div className={styles.itemInfo}>
        <h1>Song One</h1>
        <small>Artist Abebe</small>
      </div>
      <div className="actions"></div>
    </div>
  );
};

export default SongItem;