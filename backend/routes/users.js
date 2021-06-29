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
    return res.status(201).json(newUser);
  } catch (error) {
    console.log("LOG [/users/register]: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Login route
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    //Try to find User with specified email
    const user = await User.findOne({ email });

    //If it's Not Found send response with status code 404
    if (user == null) {
      return res.status(404).json("User with email '" + email + "' Not Found");
    } else {
      //Check if password is correct - using bcrypt and it's method compare
      const isPasswordValid = await bcrypt.compare(password, user.password);

      //If password doesn't match send response with status 403
      if (!isPasswordValid) {
        return res.status(403).json("Wrong password for user " + email);
      } else {
        //If login was successful then create JWT
        return res.status(200).json(user);
      }
    }
  } catch (error) {
    console.log("LOG [/users/login]: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Update User route
router.put("/:id", async (req, res) => {
  //Check if ID from request parameters match one from request body
  const validateUser = req.body.userId === req.params.id ? true : false;

  //If ID's match then update User
  if (validateUser) {
    const userId = req.params.id;

    //If data that is sent in body contains password then generate new password using bcrypt
    if (req.body.password) {
      const newPassword = req.body.password;

      try {
        const salt = await bcrypt.genSalt(10);
        const newHashedPassword = await bcrypt.hash(newPassword, salt);

        req.body.password = newHashedPassword;
      } catch (error) {
        console.log("LOG [/users/:id] - UPDATE: " + error);
        //Send response to client side
        return res.status(500).json(error.message);
      }
    }

    try {
      //Update User with data from body - User data
      const user = await User.findByIdAndUpdate(userId, {
        $set: req.body,
      });

      //If user is null then User with specified ID is Not Found
      if (user == null) {
        return res.status(404).json("User with ID " + userId + " Not Found!");
      }

      return res
        .status(200)
        .json("Account " + user.username + " has successfuly updated!");
    } catch (error) {
      console.log("LOG [/users/:id]: " + error);
      //Send response to client side
      return res.status(500).json(error.message);
    }
  } else {
    return res.status(403).json("User can update only his personal account!");
  }
});

//Delete User route
router.delete("/:id", async (req, res) => {
  //Check if ID from request parameters match one from request body
  const validateUser = req.body.userId === req.params.id ? true : false;

  //If ID's match then delete User
  if (validateUser) {
    const userId = req.params.id;

    try {
      const user = await User.findByIdAndDelete(userId);

      //If user is null then User with specified ID is Not Found
      if (user == null) {
        return res.status(404).json("User with ID " + userId + " Not Found!");
      }

      return res
        .status(200)
        .json("Account " + user.username + " has successfuly deleted!");
    } catch (error) {
      console.log("LOG [/users/:id] - DELETE: " + error);
      //Send response to client side
      return res.status(500).json(error.message);
    }
  } else {
    return res.status(403).json("User can delete only his personal account!");
  }
});

//Get single User route
router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    //If user is null then User with specified ID is Not Found
    if (user == null) {
      return res.status(404).json("User with ID " + userId + " Not Found!");
    }

    //Remove data from User object - send only neccessary parts of object
    const { updatedAt, createdAt, password, __v, ...userData } = user._doc;

    return res.status(200).json(userData);
  } catch (error) {
    console.log("LOG [/users/:id] - GET SINGLE: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Follow User route
router.put("/follow/:id", async (req, res) => {
  //Check if ID from request parameters doesn't match one from request body - User cannot follow yourself
  const validateFollowRequest =
    req.body.userId !== req.params.id ? true : false;

  //If ID's doesn't match then update Users - update Users lists (followers, following)
  if (validateFollowRequest) {
    const userToFollowId = req.params.id;
    const userId = req.body.userId;

    try {
      const userToFollow = await User.findById(userToFollowId);
      const user = await User.findById(userId);

      //If User already follows that User then send error response
      if (!userToFollow.followers.includes(userId)) {
        await userToFollow.updateOne({ $push: { followers: userId } });
        await user.updateOne({ $push: { following: userToFollowId } });

        res
          .status(200)
          .json(
            "User " +
              user.username +
              " started following " +
              userToFollow.username
          );
      } else {
        return res
          .status(403)
          .json(
            "User " + user.username + " already follow " + userToFollow.username
          );
      }
    } catch (error) {
      console.log("LOG [/users/follow/:id]: " + error);
      //Send response to client side
      return res.status(500).json(error.message);
    }
  } else {
    return res.status(403).json("You cannot start following yourself!");
  }
});

//Unfollow User route
router.put("/unfollow/:id", async (req, res) => {
  //Check if ID from request parameters doesn't match one from request body - User cannot unfollow yourself
  const validateUnfollowRequest =
    req.body.userId !== req.params.id ? true : false;

  //If ID's doesn't match then update Users - update Users lists (followers, following)
  if (validateUnfollowRequest) {
    const userToUnfollowId = req.params.id;
    const userId = req.body.userId;

    try {
      const userToUnfollow = await User.findById(userToUnfollowId);
      const user = await User.findById(userId);

      //If User doesn't follows that User then send error response
      if (userToUnfollow.followers.includes(userId)) {
        await userToUnfollow.updateOne({ $pull: { followers: userId } });
        await user.updateOne({ $pull: { following: userToUnfollowId } });

        res
          .status(200)
          .json(
            "User " + user.username + " unfollowed " + userToUnfollow.username
          );
      } else {
        return res
          .status(403)
          .json(
            "User " +
              user.username +
              " doesn't follow " +
              userToUnfollow.username
          );
      }
    } catch (error) {
      console.log("LOG [/users/unfollow/:id]: " + error);
      //Send response to client side
      return res.status(500).json(error.message);
    }
  } else {
    return res.status(403).json("You cannot unfollow yourself!");
  }
});

module.exports = router;
