const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Registration route
router.post("/register", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin != null ? req.body.isAdmin : false;

  try {
    //Generate hashed password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create new User based on given values and then save it to DB
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    }).save();

    //Send response to client side
    res.status(201).json(newUser);
  } catch (error) {
    console.log("LOG [/users/register]: " + error);
    //Send response to client side
    res.status(500).json(error);
  }
});

//Login route
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    //Try to find User with specified username
    const user = await User.findOne({ username });

    //If it's Not Found send response with status code 404
    if (user == null) {
      res.status(404).json("User with username '" + username + "' Not Found");
    } else {
      //Check if password is correct - using bcrypt and it's method compare
      const isPasswordValid = await bcrypt.compare(password, user.password);

      //If password doesn't match send response with status 403
      if (!isPasswordValid) {
        res.status(403).json("Wrong password for user " + username);
      } else {
        //If login was successful then create JWT
        res.status(200).json(user);
      }
    }
  } catch (error) {
    console.log("LOG [/users/login]: " + error);
    //Send response to client side
    res.status(500).json(error);
  }
});

module.exports = router;
