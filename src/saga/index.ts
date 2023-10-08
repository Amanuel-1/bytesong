import { call, takeEvery, put, PutEffect } from 'redux-saga/effects';
import { getSongByIdAPI, getSongsAPI } from '../api';
import {Song, SongActions} from '../store/slices/songSlice';
import { ReducerAction } from 'react';


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

export async function getSongById(id:number){
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

export default function* rootSaga() {
  yield takeEvery('song/getSongsFetch', workSongFetch);
}
