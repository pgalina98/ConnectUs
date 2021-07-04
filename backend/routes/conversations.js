const router = require("express").Router();
const User = require("../models/User");
const Conversation = require("../models/Conversation");

//Create Conversation router
router.post("/", async (req, res) => {
  //Get body parameters
  const sender = req.body.senderId;
  const receiver = req.body.receiverId;

  //Create new Conversation object
  const newConversation = new Conversation({
    members: [sender, receiver],
  });

  try {
    const createdConversation = await newConversation.save();

    res.status(201).json(createdConversation);
  } catch (error) {
    console.log("LOG [/conversations/] - CREATE: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Get all Conversation from User with specified ID
router.get("/:id", async (req, res) => {
  //Get User ID from URI params
  const userId = req.params.id;

  try {
    //Try to find User with specified ID
    const user = await User.findById(userId);

    //If user is null then User with specified ID is Not Found
    if (user == null) {
      return res.status(404).json("User with ID " + userId + " Not Found!");
    }

    //Get all Conversation from User
    const userConversations = await Conversation.find({
      members: { $all: userId },
    });

    return res.status(200).json(userConversations);
  } catch (error) {
    console.log("LOG [/conversations/] - CREATE: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

module.exports = router;
