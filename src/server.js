const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/songs', (req, res) => {
  res.json({ message: 'Get all songs' });
});
app.post('/songs', (req, res) => {
  const song = req.body;
  res.json({ message: 'Create a new song', song });
});
app.put('/songs/:id', (req, res) => {
  const { id } = req.params;
  const updatedSong = req.body;
  res.json({ message: `Update song with ID ${id}`, song: updatedSong });
});

app.delete('/songs/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Delete song with ID ${id}` });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});