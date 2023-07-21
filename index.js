const express = require("express");
const bodyParser = require("body-parser");
const playlistRouter = require("./src/routes/playlist.router");

const app = express();

app.use(bodyParser.json());

app.use("/", playlistRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
