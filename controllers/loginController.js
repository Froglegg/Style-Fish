const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../jwtconfig/default.json");

module.exports = {
  login: function(req, res) {
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
                  message: `Let's get stylish!`,
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
  }
};
