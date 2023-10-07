import axios from "axios";
import { Song } from "../store/songSlice";

axios.defaults.baseURL = "http://localhost:3001"

export const getSongsAPI  =()=> axios.get(`/songs`);

export const getSongByIdAPI  =(id:number)=> axios.get(`/songs?id=${id}`)

export const searchByTitle =(title:string)=> axios.get(`/songs?title_like=${title}`)

export const searchByArtist = (artist:string)=>axios.get(`/songs?artist_like=${artist}`)


export const addSongAPI   = (song:Song)=>axios.post(`/songs`,song)

export const updateSongAPI  = (song:Song)=> axios.put(`/songs/${song.id}`,song)

export const deleteAPI = (song:Song)=>axios.delete(`/songs/${song.id}`)