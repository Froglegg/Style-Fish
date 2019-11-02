const router = require("express").Router();
const clothesController = require("../../controllers/clothesController");

// Matches with "/api/clothes"

// get routes

// router.route("/").get(clothesController.findAllClothes);

// get routes
router.route("/shoes").get(clothesController.findAllShoes);
router.route("/tops").get(clothesController.findAllTops);
router.route("/bottoms").get(clothesController.findAllBottoms);
router.route("/outerwear").get(clothesController.findAllOuterwear);

// get by id
router.route("/shoes/:id").get(clothesController.findOneShoe);
router.route("/tops/:id").get(clothesController.findOneTop);
router.route("/bottoms/:id").get(clothesController.findOneBottom);
router.route("/outerwear/:id").get(clothesController.findOneOuterwear);

// create routes
router.route("/shoes").post(clothesController.createShoes);
router.route("/tops").post(clothesController.createTops);
router.route("/bottoms").post(clothesController.createBottoms);
router.route("/outerwear").post(clothesController.createOuterwear);

// update routes
router.route("/shoes/update/:id").put(clothesController.updateShoes);
router.route("/tops/update/:id").put(clothesController.updateTops);
router.route("/bottoms/update/:id").put(clothesController.updateBottoms);
router.route("/outerwear/update/:id").put(clothesController.updateOuterwear);

// delete
router.route("/shoes/delete/:id").delete(clothesController.deleteShoe);
router.route("/tops/delete/:id").delete(clothesController.deleteTop);
router.route("/bottoms/delete/:id").delete(clothesController.deleteBottom);
router.route("/outerwear/:id").delete(clothesController.deleteOuterwear);

module.exports = router;
