import axios from "axios";
import { Song } from "../store/slices/songSlice";

axios.defaults.baseURL = "http://localhost:3001"

export const getSongsAPI  =()=>fetch("http://localhost:3001/songs",{cache:"no-cache"}).then((res)=>res.json());

export const getSongByIdAPI  =(id:number)=> fetch(`/songs?id=${id}`).then((res)=>res.json)

export const searchByTitle =(title:string)=>fetch(`/songs?title_like=${title}`).then((res)=>res.json)

export const searchByArtist = (artist:string)=>fetch(`/songs?artist_like=${artist}`).then((res)=>res.json)


export const addSongAPI   = (song:Song)=>fetch(`/songs`,{
    method:"POST",
    body:JSON.stringify(song),
    headers:{
      "content-type":"Application/json"
    }
})

export const updateSongAPI  = (song:Song)=> axios.put(`/songs/${song.id}`,song)

export const deleteAPI = (song:Song)=>axios.delete(`/songs/${song.id}`)