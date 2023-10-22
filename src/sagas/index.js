import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSong,
  createSongSuccess,
  createSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
} from '../actions';
import { fetchSongs as fetchSongsApi, createSong as createSongApi, updateSong as updateSongApi, deleteSong as deleteSongApi } from '../api';

function* handleFetchSongs() {
  try {
    const songs = yield call(fetchSongsApi);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* handleCreateSong(action) {
  try {
    const song = yield call(createSongApi, action.payload);
    yield put(createSongSuccess(song));
  } catch (error) {
    yield put(createSongFailure(error.message));
  }
}

function* handleUpdateSong(action) {
  try {
    const { id, song } = action.payload;
    const updatedSong = yield call(updateSongApi, id, song);
    yield put(updateSongSuccess(updatedSong));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* handleDeleteSong(action) {
  try {
    const id = action.payload;
    yield call(deleteSongApi, id);
    yield put(deleteSongSuccess(id));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchSongs.type, handleFetchSongs);
  yield takeLatest(createSong.type, handleCreateSong);
  yield takeLatest(updateSong.type, handleUpdateSong);
  yield takeLatest(deleteSong.type, handleDeleteSong);
}


