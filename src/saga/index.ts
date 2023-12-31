import { call, takeEvery,takeLatest, put, PutEffect } from 'redux-saga/effects';
import { addSongAPI, getSongByIdAPI, getSongsAPI, updateSongAPI } from '../api';
import {Song, SongActions} from '../store/slices/songSlice';
import { ReducerAction } from 'react';
import { createDispatchHook } from 'react-redux';


function* workSongFetch(): Generator<ReturnType<typeof call>, any, unknown> {
  try {
    const songs: any = yield call(getSongsAPI);


    console.log('SONGS_FETCH_SUCCEDED 😎',songs);

    yield put(SongActions.getSongsSuccess(songs)) as any
  } catch (e) {
    console.log(e);
    yield put(SongActions.getSongsFailure(e)) as any
  }
}



export async function getSongById(id:string){
  console.log("getSongById is called ✋")
  return await getSongByIdAPI(id)
}

export function* workFetchASong(action:any):any{
  const songId  = action.payload
  try {
    const [song] = yield call(getSongById,songId) ;


    console.log('Single_SONG_FETCH_SUCCEDED 😎',song);

    yield put(SongActions.getSongsSuccess(song)) as any
  } catch (e) {
    console.log(e);
    yield put(SongActions.getSongsFailure(e)) as any
  }

}

export function* workAddSong(action:any){

  try{
      const song = action.payload

      yield call(addSongAPI,song)

      yield put(SongActions.addSongSuccess(song))

  }
  catch(e){
      yield put(SongActions.addSongFailure(e))
  }
}

export function* workEditASong(action:any){
  const currentSong   = action.payload
  try{
    yield call(updateSongAPI,currentSong)
    yield put(SongActions.editSongSuccess(currentSong)) as any
  }
  catch(e){
    console.log(e);
    yield put(SongActions.editSongFailure(e)) as any
  }

}

export default function* rootSaga() {
  yield takeEvery('song/getSongsFetch', workSongFetch);
  yield takeLatest('song/editSong',workEditASong)
  yield takeEvery('song/addSong',workAddSong)
}
