class Playlist {
  constructor(songId, title, artists, url, playCount) {
    this.songId = songId;
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.playCount = playCount;
  }
}

module.exports = Playlist;
