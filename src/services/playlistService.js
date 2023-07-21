const Playlist = require("../models/playlist");

let playlist = [];
let songPlayCount = {};

function addSongToPlaylist(title, artists, url, playCount) {
  const songId = generateRandomId();
  const song = new Playlist(songId, title, artists, url, playCount);
  playlist.push(song);
  songPlayCount[url] = 0;
}

function generateRandomId() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 8;
  let randomId = "";
  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }
  return randomId;
}

function playSong(songId) {
  songId = parseInt(songId);
  if (!isNaN(songId) && songId >= 0 && songId < playlist.length) {
    playlist[songId].playCount++;
    songPlayCount[playlist[songId].url]++;
    return playlist[songId];
  }
  return null;
}

function getPlaylist() {
  return playlist;
}

function getMostPlayed() {
  const sortedPlaylist = [...playlist];
  sortedPlaylist.sort((a, b) => b.playCount - a.playCount);
  return sortedPlaylist;
}

module.exports = {
  addSongToPlaylist,
  playSong,
  getPlaylist,
  getMostPlayed,
};
