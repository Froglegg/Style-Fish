const router = require("express").Router();
const clothesRoutes = require("./clothes");
const userRoutes = require("./users");
const outfitRoutes = require("./outfit");
const loginRoute = require("./login");

// Book routes
router.use("/clothes", clothesRoutes);
router.use("/users", userRoutes);
router.use("/outfits", outfitRoutes);
router.use("/login", loginRoute);

module.exports = router;
