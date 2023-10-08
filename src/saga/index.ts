import { call, takeEvery, put, PutEffect } from 'redux-saga/effects';
import { getSongsAPI } from '../api';
import {SongActions} from '../store/slices/songSlice';
import { ReducerAction } from 'react';


function* workSongFetch(): Generator<ReturnType<typeof call>, any, unknown> {
  try {
    const songs: any = yield call(getSongsAPI);


    console.log('SONGS_FETCH_SUCCEDED 😎',songs);

    yield put(SongActions.getSongsSuccess(songs)) as any
  } catch (e) {
    console.log(e);
    yield put(SongActions.getSongsFailure()) as any
  }
}

export default function* rootSaga() {
  yield takeEvery('song/getSongsFetch', workSongFetch);
}
