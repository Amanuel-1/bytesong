import {call,takeEvery,put} from 'redux-saga/effects'
import { getSongsAPI } from '../api'
import { Song ,getSongsSuccess} from '../store/songSlice'

function* workSongFetch(): Generator<ReturnType<typeof call>, any, unknown> {
    const songs:any = yield call(async () => await fetch("http://localhost:3001/songs").then((res)=>res.json()));

    
    put(getSongsSuccess(songs))
    console.log("this is the fetched songs list 🛑🛑🎯",songs);
    // Rest of your code
  }


export default function* rootSaga(){
    yield takeEvery('song/getSongsFetch',workSongFetch)

}