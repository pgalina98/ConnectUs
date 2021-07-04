const router = require("express").Router();
const Message = require("../models/Message");

//Create Message router
router.post("/", async (req, res) => {
  //Get body parameters
  const conversationId = req.body.conversationId;
  const senderId = req.body.senderId;
  const messageText = req.body.messageText;

  //Create new Conversation object
  const newMessage = new Message({
    conversationId,
    senderId,
    messageText,
  });

  try {
    const createdMessage = await newMessage.save();

    res.status(201).json(createdMessage);
  } catch (error) {
    console.log("LOG [/messages/] - CREATE: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Get all Message from Conversation with specified ID
router.get("/:id", async (req, res) => {
  //Get Conversation ID from URI params
  const conversationId = req.params.id;

  try {
    //Get all Messages from specified Conversation
    const allMessagesFromConversation = await Message.find({
      conversationId: { $all: conversationId },
    });

    return res.status(200).json(allMessagesFromConversation);
  } catch (error) {
    console.log("LOG [/messages/]: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

module.exports = router;
