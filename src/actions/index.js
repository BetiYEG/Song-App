import { createAction } from '@reduxjs/toolkit';

export const fetchSongs = createAction('FETCH_SONGS');
export const fetchSongsSuccess = createAction('FETCH_SONGS_SUCCESS');
export const fetchSongsFailure = createAction('FETCH_SONGS_FAILURE');

export const createSong = createAction('CREATE_SONG');
export const createSongSuccess = createAction('CREATE_SONG_SUCCESS');
export const createSongFailure = createAction('CREATE_SONG_FAILURE');

export const updateSong = createAction('UPDATE_SONG');
export const updateSongSuccess = createAction('UPDATE_SONG_SUCCESS');
export const updateSongFailure = createAction('UPDATE_SONG_FAILURE');

export const deleteSong = createAction('DELETE_SONG');
export const deleteSongSuccess = createAction('DELETE_SONG_SUCCESS');
export const deleteSongFailure = createAction('DELETE_SONG_FAILURE');