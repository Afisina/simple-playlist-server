const express = require("express");
const playlistController = require("../controllers/playlist.controller");
const path = require("path");
const router = express.Router();

router.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
  const filePath = path.resolve("public/playlist.html");
  res.sendFile(filePath);
});
router.post("/add-song", playlistController.addSong);
router.get("/play/:songId", playlistController.playSong);
router.get("/playlist", playlistController.getPlaylist);
router.get("/most-played", playlistController.getMostPlayed);

module.exports = router;
