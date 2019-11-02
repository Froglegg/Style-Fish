const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAllClothes: function(req, res) {
  //   db.Clothes.find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  //Read
  findAllShoes: function(req, res) {
    db.Shoe.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTops: function(req, res) {
    db.Top.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllBottoms: function(req, res) {
    db.Bottom.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllOuterwear: function(req, res) {
    db.Outerwear.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find one by id
  findOneShoe: function(req, res) {
    db.Shoe.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneTop: function(req, res) {
    db.Top.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneBottom: function(req, res) {
    db.Bottom.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneOuterwear: function(req, res) {
    db.Outerwear.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Create
  createShoes: function(req, res) {
    db.Shoe.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTops: function(req, res) {
    db.Top.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createBottoms: function(req, res) {
    db.Bottom.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createOuterwear: function(req, res) {
    db.Outerwear.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Update
  updateShoes: function(req, res) {
    db.Shoes.findByIdAndUpdate(req.params.id, req.body)
      .then(dbModel => console.log(dbModel), res.json(dbModel))
      .catch(err => console.log(err), res.json(err));
  },
  updateTops: function(req, res) {
    db.Tops.findByIdAndUpdate(req.params.id, req.body)
      .then(dbModel => console.log(dbModel), res.json(dbModel))
      .catch(err => console.log(err), res.json(err));
  },
  updateBottoms: function(req, res) {
    db.Bottoms.findByIdAndUpdate(req.params.id, req.body)
      .then(dbModel => console.log(dbModel), res.json(dbModel))
      .catch(err => console.log(err), res.json(err));
  },
  updateOuterwear: function(req, res) {
    db.OUterwear.findByIdAndUpdate(req.params.id, req.body)
      .then(dbModel => console.log(dbModel), res.json(dbModel))
      .catch(err => console.log(err), res.json(err));
  },

  // Delete
  deleteShoe: function(req, res) {
    db.Shoe.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteTop: function(req, res) {
    db.Top.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteBottom: function(req, res) {
    db.Bottom.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteOuterwear: function(req, res) {
    db.Outerwear.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
