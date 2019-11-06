var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ClosetFeedSchema = new Schema({
  type: {
    type: String,
    default: ""
  },
  top: {
    type: Schema.Types.ObjectId,
    ref: "Top"
  },
  bottom: {
    type: Schema.Types.ObjectId,
    ref: "Bottom"
  },
  shoe: {
    type: Schema.Types.ObjectId,
    ref: "Shoe"
  },
  outerwear: {
    type: Schema.Types.ObjectId,
    ref: "Outerwear"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  key: {
    type: String
  }

  // The ref property links the ObjectId to the Outfit model
  // This allows us to populate the User with the associated Outfit
});

// This creates our model from the above schema, using mongoose's model method
var ClosetFeed = mongoose.model("ClosetFeed", ClosetFeedSchema);

// Export the Outfit model
module.exports = ClosetFeed;
