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
        songs: new Array<Song>,
        isLoading:false,
        error:""
    },
    reducers:{
        getSongsFetch:(state,action)=>{
            state.isLoading = true;
            return state
        },
        getSongsSuccess:(state,action:{type:string,payload:Array<Song>})=>{
            state.songs  =  action.payload
            state.isLoading = false;
        },
        getSongsFailure:(state)=>{
            state.error= "Failed to Fetch Song"
        },
        addSong(state,action:songAction){
            state.songs.push(action.payload)
            return state
        },
        editSong:(state,action:songAction)=>{
            state.songs.map((song,index)=>{
                if(song.id === action.payload.id){
                    song  = action.payload
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

export const {addSong,getSongsFetch,deleteSong,editSong,getSongsSuccess,getSongsFailure} =  songSlice.actions;
export default songSlice.reducer