const router = require("express").Router();
const closetFeedController = require("../../controllers/sockMethods");

router.route("/").get(closetFeedController.getMongoClosetFeed);
router.route("/").post(closetFeedController.pushToMongoClosetFeed);
router.route("/").delete(closetFeedController.deleteOutfitsFromClosetFeed);

module.exports = router;
