const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../../models");
const config = require("../../jwtconfig/default.json");

router.route("/").post((req, res) => {
  const { email, password } = req.body;

  db.User.findOne({ email: email }).then(user => {
    console.log(user);
    if (user) {
      bcrypt.compare(password, user.password).then(match => {
        if (match) {
          jwt.sign(
            { email, id: user._id },
            config.jwtSecret,
            { expiresIn: 36000 },
            (err, token) => {
              res.json({
                message: `success yo! token is ${token}`,
                token,
                isAuthed: true
              });
            }
          );
        } else {
          res.json({
            message: "Incorrect credentials.",
            isAuthed: false
          });
        }
      });
    } else {
      res.json({
        message: "Email doesn't exist."
      });
    }
  });
});

module.exports = router;
