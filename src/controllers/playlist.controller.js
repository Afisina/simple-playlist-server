const playlistService = require("../services/playlistService");

function addSong(req, res) {
  const { title, artists, url, playCount } = req.body;
  playlistService.addSongToPlaylist(title, artists, url, playCount);
  res.status(201).json({ message: "Song added to the playlist successfully." });
}

function playSong(req, res) {
  const songId = req.params.songId;
  const song = playlistService.playSong(songId);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ message: "Song not found in the playlist." });
  }
}

function getPlaylist(req, res) {
  const playlist = playlistService.getPlaylist();
  res.json(playlist);
}

function getMostPlayed(req, res) {
  const mostPlayed = playlistService.getMostPlayed();
  res.json(mostPlayed);
}

module.exports = {
  addSong,
  playSong,
  getPlaylist,
  getMostPlayed,
};
