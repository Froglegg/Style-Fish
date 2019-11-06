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
    type: Schema.Types.Mixed
  },
  bottom: {
    type: Schema.Types.Mixed
  },
  shoe: {
    type: Schema.Types.Mixed
  },
  outerwear: {
    type: Schema.Types.Mixed
  },
  user: {
    type: Schema.Types.Mixed
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
