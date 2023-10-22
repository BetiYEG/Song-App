import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchSongs = async () => {
  const response = await axios.get(`${API_BASE_URL}/songs`);
  return response.data;
};

export const createSong = async (song) => {
  const newSong = { ...song, id: Math.floor(Math.random() * 1000) + 1 };
  return newSong;
};

export const updateSong = async (id, song) => {
  const updatedSong = { ...song, id };
  return updatedSong;
};

export const deleteSong = async (id) => {
  return id;
};