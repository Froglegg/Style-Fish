const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.Outfit.find(req.query)
      .populate("user")
      .populate("top")
      .populate("bottom")
      .populate("shoe")
      .populate("outerwear")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Outfit.findById(req.params.id)
      .populate("user")
      .populate("top")
      .populate("bottom")
      .populate("shoe")
      .populate("outerwear")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    console.log(`\n\nAnd here is the user ID ${req.params.id}`);

    db.Outfit.create(req.body)
      .then(function(dbModel) {
        // If an outfit was created successfully, find one user with an `_id` equal to `req.params.id`. Update the User to be associated with the new outfit
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        console.log(dbModel);
        return db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { outfits: dbModel._id } },
          { new: true }
        );
      })
      .then(function(dbModel) {
        console.log("done");
        // If we were able to successfully associate an outfit with a user, send it back to the client
        res.json(dbModel);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  update: function(req, res) {
    db.Outfit.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Outfit.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeAll: function(req, res) {
    db.Outfit.remove({})
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  removeAllFromUser: function(req, res) {
    db.User.updateOne(
      { _id: req.params.id },
      { $pull: { outfits: { $exists: true } } }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  }
};
