const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/styleFish");

const outerwear = [
  {
    type: "hoodie",
    color: "blank",
    opacity: "blank",
    imageURL: "outerwear/clear.png"
  },
  {
    type: "hoodie",
    color: "red",
    opacity: "light",
    imageURL: "outerwear/light-red.png"
  },
  {
    type: "hoodie",
    color: "red",
    opacity: "dark",
    imageURL: "outerwear/red.png"
  },
  {
    type: "hoodie",
    color: "blue",
    opacity: "light",
    imageURL: "outerwear/light-blue.png"
  },
  {
    type: "hoodie",
    color: "blue",
    opacity: "dark",
    imageURL: "outerwear/blue.png"
  },
  {
    type: "hoodie",
    color: "green",
    opacity: "light",
    imageURL: "outerwear/light-green.png"
  },
  {
    type: "hoodie",
    color: "green",
    opacity: "dark",
    imageURL: "outerwear/green.png"
  },
  {
    type: "hoodie",
    color: "black",
    opacity: "blank",
    imageURL: "outerwear/black.png"
  }
];

const tops = [
  {
    type: "short-sleeve",
    color: "blank",
    opacity: "blank",
    imageURL: "tops/clear.png"
  },
  {
    type: "short-sleeve",
    color: "red",
    opacity: "light",
    imageURL: "tops/light-red.png"
  },
  {
    type: "short-sleeve",
    color: "red",
    opacity: "dark",
    imageURL: "tops/red.png"
  },
  {
    type: "short-sleeve",
    color: "blue",
    opacity: "light",
    imageURL: "tops/light-blue.png"
  },
  {
    type: "short-sleeve",
    color: "blue",
    opacity: "dark",
    imageURL: "tops/blue.png"
  },
  {
    type: "short-sleeve",
    color: "green",
    opacity: "light",
    imageURL: "tops/light-green.png"
  },
  {
    type: "short-sleeve",
    color: "green",
    opacity: "dark",
    imageURL: "tops/green.png"
  },
  {
    type: "short-sleeve",
    color: "black",
    opacity: "blank",
    imageURL: "tops/black.png"
  }
];

const bottoms = [
  {
    type: "joggers",
    color: "blank",
    opacity: "blank",
    imageURL: "bottoms/clear.png"
  },
  {
    type: "joggers",
    color: "red",
    opacity: "light",
    imageURL: "bottoms/light-red.png"
  },
  {
    type: "joggers",
    color: "red",
    opacity: "dark",
    imageURL: "bottoms/red.png"
  },
  {
    type: "joggers",
    color: "blue",
    opacity: "light",
    imageURL: "bottoms/light-blue.png"
  },
  {
    type: "joggers",
    color: "blue",
    opacity: "dark",
    imageURL: "bottoms/blue.png"
  },
  {
    type: "joggers",
    color: "green",
    opacity: "light",
    imageURL: "bottoms/light-green.png"
  },
  {
    type: "joggers",
    color: "green",
    opacity: "dark",
    imageURL: "bottoms/green.png"
  },
  {
    type: "joggers",
    color: "black",
    opacity: "blank",
    imageURL: "bottoms/black.png"
  }
];

const shoes = [
  {
    type: "sneakers",
    color: "blank",
    opacity: "blank",
    imageURL: "shoes/clear.png"
  },
  {
    type: "sneakers",
    color: "red",
    opacity: "light",
    imageURL: "shoes/light-red.png"
  },
  {
    type: "sneakers",
    color: "red",
    opacity: "dark",
    imageURL: "shoes/red.png"
  },
  {
    type: "sneakers",
    color: "blue",
    opacity: "light",
    imageURL: "shoes/light-blue.png"
  },
  {
    type: "sneakers",
    color: "blue",
    opacity: "dark",
    imageURL: "shoes/blue.png"
  },
  {
    type: "sneakers",
    color: "green",
    opacity: "light",
    imageURL: "shoes/light-green.png"
  },
  {
    type: "sneakers",
    color: "green",
    opacity: "dark",
    imageURL: "shoes/green.png"
  },
  {
    type: "sneakers",
    color: "black",
    opacity: "blank",
    imageURL: "shoes/black.png"
  }
];

db.Outerwear.remove({})
  .then(() => db.Outerwear.insertMany(outerwear))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Top.remove({})
  .then(() => db.Top.insertMany(tops))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Bottom.remove({})
  .then(() => db.Bottom.insertMany(bottoms))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Shoe.remove({})
  .then(() => db.Shoe.insertMany(shoes))
  .then(data => {
    console.log(data.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
