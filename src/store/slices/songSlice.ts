import {createSlice} from '@reduxjs/toolkit'
import { redirect } from 'react-router-dom'

export type Song  = {
    id:number,
    title:string,
    artist:string,
    cover:string,
    description:string,
    createdAt?:Date,
    updatedAt?:Date
}
export type songError ={
    error:string
}
export type songSuccess={
    success:string
}


type songAction ={type:string,payload:Song}


export const songSlice = createSlice({
    name:"song",
    initialState:{
        songs: [] as Song[],
        selectedSong:{} as Song,
        isLoading:false,
        lastIndex :5,
        error:"",
        success:"",
        changeSong:{} as Song


    },
    reducers:{
        getSongsFetch:(state)=>{
            state.isLoading = true;
            console.log("🎯➕success-payload",[...state.songs])
            return state
        },
        getSongsSuccess:(state,action)=>{
            state.songs = action.payload
            state.isLoading=false
            state.success ="song fetched successfully"
            state.error= ""
            console.log("🎇🎇🎇 songSuccess CAlled",state.songs,action)
            return state
        },
        getSongsFailure:(state,action)=>{
            state.error= "sorry unable to get the songs. \n"+action.payload
            state.success =""
            return state
        },
        editSongSuccess:(state,action)=>{
            state.songs = action.payload
            state.isLoading=false
            state.success ="song updated successfully"
            state.error= ""
            console.log("🎇🎇🎇 songSuccess CAlled",state.songs,action)
            return state
        },
        editSongFailure:(state,action)=>{
            state.error= "sorry unable to edit the song. \n"+action.payload
            state.success=""
            return state
        },
        addSong(state,action){
            console.log("addSong action dispatched")
            state.songs.push({...action.payload,id:state.lastIndex})
            state.lastIndex+=1
            
            return state
        },
        addSongSuccess:(state,action)=>{
            state.songs = action.payload
            state.isLoading=false
            state.success ="song added successfully"
            state.error= ""
            console.log("🎇🎇🎇 songSuccess CAlled",state.songs,action)
            return state
        },
        addSongFailure:(state,action)=>{
            state.error= "sorry unable to add the song. \n"+action.payload
            state.success=""
            return state
        },
        editSong:(state,action)=>{
            if(!action.payload.id){
                console.log("opps there is no id in your action ")
            }
            for(let i=0 ; i<(state.songs).length;i++){
                if(state.songs[i].id === action.payload.id){
                    state.songs[i] = action.payload
                    return state
                }
            }
            return state
        },

        deleteSong:(state,action:{type:any,payload:number})=>{
            state.songs  = state.songs.filter((song)=>song.id !== action.payload)

            return state
        } ,

        updateChangingSong:(state,action:{type:any,payload:number})=>{
            const songId  =  action.payload
            const song  = state.songs.find((s)=>s.id == songId)

            if(song){
                state.changeSong =song
            }
            else{
                state.success =""
                state.error ="there is no song with the id "+songId
            }

            
        }
        // getSongById:(state,action)=>{
        //     const singleSong  = state.songs.filter((song)=>song.id === action.payload)
        //     return single
        // }  

    }
})

export type rootState  = ReturnType<typeof songSlice.reducer>;
export const SongActions  = songSlice.actions
// export const {addSong,getSongsFetch,deleteSong,editSong,getSongsSuccess,getSongsFailure} =  songSlice.actions;
export default songSlice.reducer