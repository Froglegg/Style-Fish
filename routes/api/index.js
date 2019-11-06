const router = require("express").Router();
const clothesRoutes = require("./clothes");
const userRoutes = require("./users");
const outfitRoutes = require("./outfit");
const loginRoute = require("./login");
const closetFeedRoutes = require("./closetFeed");

// Book routes
router.use("/clothes", clothesRoutes);
router.use("/users", userRoutes);
router.use("/outfits", outfitRoutes);
router.use("/login", loginRoute);
router.use("/closetFeed", closetFeedRoutes);

module.exports = router;
