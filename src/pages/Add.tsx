import React, { useState } from 'react';
import { css } from '@emotion/css';
import { formContainerStyles, formStyles, labelStyles, inputStyles, textareaStyles, buttonStyles, Btn } from '../lib/constants';
import { useDispatch, useSelector } from 'react-redux';
import { SongActions } from '../store/slices/songSlice';
const AddSong = () => {
  const dispatch = useDispatch()
  const lastIndex  = useSelector((state:any)=>state.songsList.lastIndex)
  const [songEntry, setSongEntry] = useState({
    title: '',
    artist: '',
    cover: '',
    description: '',
    createdAt: '',
    updatedAt: ''
  });

  const handleFormChange = (event:any) => {
    const { name, value } = event.target;
    setSongEntry((prevSongEntry) => ({
      ...prevSongEntry,
      [name]: value
    }));

    console.log(name,value)
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    setSongEntry({...songEntry,createdAt: Date.now().toString(),updatedAt:Date.now().toString()})
    console.log("to be submitted 🎯 ",songEntry)
    dispatch(SongActions.addSong(songEntry))
    
  };

  return (
    <div className={formContainerStyles}>
      <div className="alert"></div>
      <form className={formStyles} onSubmit={handleSubmit}>
        <label className={labelStyles} htmlFor="title">
          Title:
        </label>
        <input
          className={inputStyles}
          type="text"
          id="title"
          name="title"
          value={songEntry.title}
          onChange={handleFormChange}
        />

        <label className={labelStyles} htmlFor="artist">
          Artist:
        </label>
        <input
          className={inputStyles}
          type="text"
          id="artist"
          name="artist"
          value={songEntry.artist}
          onChange={handleFormChange}
        />

        <label className={labelStyles} htmlFor="coverImage">
          Cover Image URL:
        </label>
        <input
          className={inputStyles}
          type="text"
          id="coverImage"
          name="cover"
          value={songEntry.cover}
          onChange={handleFormChange}
        />

        <label className={labelStyles} htmlFor="description">
          Description:
        </label>
        <textarea
          className={textareaStyles}
          id="description"
          name="description"
          rows={4}
          value={songEntry.description}
          onChange={handleFormChange}
        ></textarea>

        <Btn type="submit">Add Song</Btn>
      </form>
    </div>
  );
};

export default AddSong;