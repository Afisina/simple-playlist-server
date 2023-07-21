1. simple-playlist-server
This repository contains a simple playlist server built using Express and Node.js. The server provides endpoints to manage a music playlist, allowing users to add songs to the playlist, play songs, and get a list of songs sorted by the most played.

2. Features
- Add song to the playlist with attributes: Title, Artists, URL (from Spotify URL), and Play Count.
- Play a song from the playlist, incrementing its play count.
- Get the list of songs from the playlist.
- Track song play count in the playlist.
- Retrieve a list of songs sorted by the most played.

3. Technologies Used
- Node.js
- Express.js
- JavaScript

4. Installation
- Clone the repository to your local machine using the following command:
`git clone https://github.com/your-username/simple-playlist-server.git`
- Navigate to the project directory:
`cd simple-playlist-server`
- Install the required dependencies:
`npm install`
- To start the server, run the following command:
`node index.js`

5. API Endpoints
You can use a tool like Postman to interact with the server and test the API endpoints, and use song.json as the data
- `POST /add-song`: Add a song to the playlist.
![image](https://github.com/Afisina/simple-playlist-server/assets/39270680/75065949-9bc3-4ebb-a3d4-56e0ccd43a30)
- `GET /play/:songId`: Play a song from the playlist by providing the song's ID. If you hit endpoint the playcount will increase, look the playcount between picture 1 and picture 2
![image](https://github.com/Afisina/simple-playlist-server/assets/39270680/3866f620-177b-488c-a9ff-12b4d262a815)
![image](https://github.com/Afisina/simple-playlist-server/assets/39270680/84b8b69f-cd8f-4948-8af4-8c3d629773c8)
- `GET /playlist`: Get the list of songs from the playlist.
![image](https://github.com/Afisina/simple-playlist-server/assets/39270680/9a9395da-df02-4506-b0f7-68e79e0ea4ff)
- `GET /most-played`: Get a list of songs sorted by the most played.
![image](https://github.com/Afisina/simple-playlist-server/assets/39270680/305facb3-d384-4c1c-b638-5a340c19ab0e)

