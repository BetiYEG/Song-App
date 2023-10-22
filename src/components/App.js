import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, createSong, updateSong, deleteSong } from '../actions';
const App = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleCreateSong = () => {
    const newSong = { title: 'New Song', artist: 'Unknown' };
    dispatch(createSong(newSong));
  };

  const handleUpdateSong = (id, updatedSong) => {
    dispatch(updateSong({ id, song: updatedSong }));
  };

  const handleDeleteSong = (id) => {
    dispatch(deleteSong(id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Songs</h1>
      <button onClick={handleCreateSong}>Create Song</button>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist}
            <button onClick={() => handleUpdateSong(song.id, { ...song, title: 'Updated Song' })}>Update</button>
            <button onClick={() => handleDeleteSong(song.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;