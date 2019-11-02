const axios = require("axios");

// socket methods
module.exports = {
  getClosetFeed: async (socket, port) => {
    try {
      const res = await axios.get(`/api/outfits`, {
        proxy: {
          // host: "127.0.0.1",
          port: port
        }
      });
      let array = res.data;
      let newOutfit = array[0];
      // if no new book, then exit the function
      if (!newOutfit) {
        return;
      } else {
        socket.emit("closetFeed", newOutfit);
      }
    } catch (error) {
      console.log(`Error is ${error.message} error id is ${error.id}`);
    }
  }
};
