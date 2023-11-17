import axios from "axios";
import { Song } from "../store/slices/songSlice";

axios.defaults.baseURL = "http://localhost:3001"

export const getSongsAPI  =()=>fetch("http://localhost:3001/songs",{cache:"no-cache"}).then((res)=>res.json());

export const getSongByIdAPI  =(id:string)=> fetch(`http://localhost:3001/songs?id=${id}`).then((res)=>res.json())

export const searchByTitle =(title:string)=>fetch(`http://localhost:3001/songs?title_like=${title}`).then((res)=>res.json)

export const searchByArtist = (artist:string)=>fetch(`http://localhost:3001/songs?artist_like=${artist}`).then((res)=>res.json)


export const addSongAPI   = (song:Song)=>fetch(`http://localhost:3001/songs/`,{
    method:"POST",
    body:JSON.stringify(song),
    headers:{
      "content-type":"Application/json"
    }
})

export const updateSongAPI  = (song:Song)=>fetch(`http://localhost:3001/songs/${song.id}`,{
  method:"PUT",
  body:JSON.stringify(song),
  headers:{
    "content-type":"Application/json"
  }
})


export const deleteAPI = (song:Song)=>axios.delete(`http://localhost:3001/songs/${song.id}`)