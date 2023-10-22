import { createReducer } from '@reduxjs/toolkit';
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongSuccess,
  createSongFailure,
  updateSongSuccess,
  updateSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
} from '../actions';

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchSongsSuccess, (state, action) => {
      state.songs = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchSongsFailure, (state, action) => {
      state.songs = [];
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(createSongSuccess, (state, action) => {
      state.songs.push(action.payload);
      state.loading = false;
      state.error = null;
    })
    .addCase(createSongFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateSongSuccess, (state, action) => {
      const updatedSong = action.payload;
      const index = state.songs.findIndex((song) => song.id === updatedSong.id);
      if (index !== -1) {
        state.songs[index] = updatedSong;
      }
      state.loading = false;
      state.error = null;
    })
    .addCase(updateSongFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteSongSuccess, (state, action) => {
      const id = action.payload;
      state.songs = state.songs.filter((song) => song.id !== id);
      state.loading = false;
      state.error = null;
    })
    .addCase(deleteSongFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default songReducer;