const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/users"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Find user by Id and update their outfit
router
  .route("/:id")
  .get(userController.findById)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;
