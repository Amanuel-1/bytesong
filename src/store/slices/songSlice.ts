import {createSlice} from '@reduxjs/toolkit'

export type Song  = {
    id:number,
    title:string,
    artist:string,
    cover:string,
    createdAt?:Date,
    updatedAt?:Date
}
export type songError ={
    error:string
}


type songAction ={type:string,payload:Song}


export const songSlice = createSlice({
    name:"song",
    initialState:{
        songs: [] as Array<Song>,
        isLoading:false,
        error:""
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

            console.log("🎇🎇🎇 songSuccess CAlled",state.songs,action)
            return state
        },
        getSongsFailure:(state)=>{
            state.error= "Failed to Fetch Song"
            return state
        },
        addSong(state,action:songAction){
            state.songs.push(action.payload)
            return state
        },
        editSong:(state,action:songAction)=>{
            state.songs.forEach((song,index)=>{
                if(song.id === action.payload.id){
                    state.songs[index]  = action.payload
                }
            })
            return state
        },

        deleteSong:(state,action:songAction)=>{
            state.songs  = state.songs.filter((song)=>song.id !== action.payload.id)

            return state
        }      

    }
})

export type rootState  = ReturnType<typeof songSlice.reducer>;
export const SongActions  = songSlice.actions
// export const {addSong,getSongsFetch,deleteSong,editSong,getSongsSuccess,getSongsFailure} =  songSlice.actions;
export default songSlice.reducer