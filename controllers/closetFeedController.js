const axios = require("axios");
const db = require("../models");

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

      let newOutfit = array[array.length - 1];
      if (!newOutfit) {
        return;
      } else {
        socket.emit("closetFeed", newOutfit);
      }
    } catch (error) {
      console.log(`Error is ${error.message} error id is ${error.id}`);
    }
  },
  socketGetMongoClosetFeed: async (socket, port) => {
    try {
      const res = await axios.get(`/api/closetFeed`, {
        proxy: {
          // host: "127.0.0.1",
          port: port
        }
      });
      let array = res.data;

      let newOutfit = array[array.length - 1];
      if (!newOutfit) {
        return;
      } else {
        socket.emit("closetFeed", newOutfit);
      }
    } catch (error) {
      console.log(`Error is ${error.message} error id is ${error.id}`);
    }
  },
  getMongoClosetFeed: function(req, res) {
    db.ClosetFeed.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  pushToMongoClosetFeed: function(req, res) {
    console.log("\n\nthis is push to mongo closet feed in the controller\n\n");
    console.log(req.body);
    console.log("\n\nthis is push to mongo closet feed in the controller\n\n");

    db.ClosetFeed.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  deleteOutfitsFromClosetFeed: function(req, res) {
    db.ClosetFeed.remove({})
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  }
};
