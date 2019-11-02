const express = require("express");
const path = require("path");
const routes = require("./routes");
const app = express();
const server = require("http").createServer(app);
// socket io setup logic: an instatntiation of Express (app) is passed through an instantiaion of an http server, so that we can run socket IO in the same server instance as the app. In other words, Express and Socket IO are listening on the same server instance. See https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen
const io = require("socket.io")(server);
// socket IO functions
const sockMethods = require("./controllers/sockMethods");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/styleFish");

// Define API routes here

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// socket subscription sends a response from the server after an initial subscritpion (emit SubscribeToClosetFeed) at an interval defined in the BookFeed utility
let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  socket.on("subscribeToClosetFeed", interval => {
    console.log(
      "client is subscribing to closet feed with interval ",
      interval
    );
    setInterval(() => {
      sockMethods.getClosetFeed(socket, PORT);
    }, interval);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
