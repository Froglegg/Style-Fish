const router = require("express").Router();
const outfitController = require("../../controllers/outfitController");
const userController = require("../../controllers/userController");

// Matches with "/api/outfits"

// finds all outfits
router.route("/").get(outfitController.findAll);

// id for post route is userId
router.route("/:id").post(outfitController.create);

// id for get route is outfit id
router.route("/:id").get(outfitController.findById);

// to get outfits associated with user, have to use userController
router.route("/user/:id").get(userController.findById);

// deletes all outfits
router.route("/").delete(outfitController.removeAll);

// deletes one outfit based on id
router.route("/:id").delete(outfitController.remove);

// deletes all of that user's outfits
router.route("/user/:id").delete(outfitController.removeAllFromUser);

module.exports = router;
