import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { formContainerStyles, formStyles, labelStyles, inputStyles, textareaStyles, Btn } from '../lib/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Song, SongActions } from '../store/slices/songSlice';
import { redirect, useNavigate, useParams } from 'react-router-dom';



const EditSong = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  let songId:number  = parseInt(id as string)??0 

// let error:string= useSelector((state:any)=>state.songsList.error)
  const song  = useSelector((state:any)=>state.songsList.changeSong)
  console.log('we are lookingi for this song',song)

  const [songEntry, setSongEntry] = useState({
    id:songId,
    title: song?.title,
    artist: song?.artist,
    cover: song?.cover,
    description: song?.description,
    createdAt: song?.createdAt,
    updatedAt: song?.updatedAt
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
    
    setSongEntry({...songEntry,updatedAt:new Date()})
    console.log("to be submitted 🎯 ",songEntry)
    dispatch(SongActions.editSong(songEntry))
    dispatch(SongActions.getSongsFetch())//this wasn't what i was planning for . it is just a temporary fix
    

    
    // Add your form submission logic here
  };

  return (
    <div className={formContainerStyles}>
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

export default EditSong;