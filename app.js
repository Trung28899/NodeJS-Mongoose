const path = require("path");
const mongoose = require("mongoose");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

/*
  Storing user to request
*/
app.use((req, res, next) => {
  User.findById("5f7655080c4e9d6aacada07a")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

/*
  This is how we set up the mongoose connection
  Doesn't need to ./util/database anymore for it

  The link is taken from mongo atlas > login > see your cluster
  and hit connect > connect your application 
  > it will show a link, remember to add in your password and 
  database name
*/
mongoose
  .connect(
    "mongodb+srv://trung:trungtrinh38@cluster0.px6on.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    /*
      .findOne() will return the 1st user
      here we check if there is an user in the db, 
      if there is an user, we don't create new user
    */
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Trung",
          email: "trung28899@gmail.com",
          cart: { items: [] },
        });
        /*
          This is how we save an user
          save() is provided by Mongoose
        */
        user.save();
      }
    });

    app.listen(3000);
  })
  .catch((err) => console.log(err));
