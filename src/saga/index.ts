import {call,takeEvery,put} from 'redux-saga/effects'
import { getSongsAPI } from '../api'
import { Song ,getSongsSuccess} from '../store/songSlice'


function* workSongFetch(){
    const songs:Array<Song>  =  yield call(getSongsAPI)
    
    yield put(getSongsSuccess(songs))
}

export default function* rootSaga(){
    yield takeEvery('song/getSongsFetch',workSongFetch)

}