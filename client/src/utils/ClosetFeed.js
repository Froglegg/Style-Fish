// book feed uses an interval to emit a request to the server, which responds with book Object.
import io from "socket.io-client";
const socket = io();

function subscribeToClosetFeed(cb) {
  socket.on("closetFeed", sendFeed => cb(null, sendFeed));
  socket.emit("subscribeToClosetFeed", 500);
}
export { subscribeToClosetFeed };
