import React, { useState, useEffect, useRef } from 'react';
import optionsIcon from '../../assets/options.svg';
import styles from './songs.module.css';
import styled from '@emotion/styled';

const StyledImg = styled.img`
  width: 140px;
  height: 100%;
  object-fit: cover;
  background-color: rgb(30, 30, 30);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #f9f9f9;
  min-width: 120px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled.div`
  cursor: pointer;
  padding: 8px 12px;
  font-size: 14px;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

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
        <StyledImg src={require('../../assets/logo.png')} alt="image" />
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