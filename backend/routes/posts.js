const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create Post route
router.post("/", async (req, res) => {
  //Create new Post object based on data from request body
  const newPost = new Post(req.body);

  try {
    //Save new Post to Database
    const createdPost = await newPost.save();

    res.status(201).json(createdPost);
  } catch (error) {
    console.log("LOG [/posts] - CREATE: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Get all Post route - all posts from Users that logged User is following
router.get("/timeline/:userId", async (req, res) => {
  const timelinePosts = [];
  const userId = req.params.userId;

  try {
    //Try to find User with specified ID
    const user = await User.findById(userId);

    //If user is null then User with specified ID is Not Found
    if (user == null) {
      return res.status(404).json("User with ID " + userId + " Not Found!");
    }

    //Get all posts from logged User
    const userPosts = await Post.find({ userId });
    //Get all post from Users that looged User is following
    const followedUsersPosts = await Post.find({
      userId: { $in: user.following },
    });

    timelinePosts.push(...userPosts);
    timelinePosts.push(...followedUsersPosts);

    return res.status(200).json(timelinePosts);
  } catch (error) {
    console.log("LOG [/posts/following]: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Get single Post route
router.get("/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);

    //If post is null then Post with specified ID is Not Found
    if (post == null) {
      return res.status(404).json("Post with ID " + postId + " Not Found!");
    }

    return res.status(200).json(post);
  } catch (error) {
    console.log("LOG [/posts/:id] - GET SINGLE: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Update Post route
router.put("/:id", async (req, res) => {
  const postId = req.params.id;
  const userId = req.body.userId;

  try {
    const post = await Post.findById(postId);

    //If post is null then Post with specified ID is Not Found
    if (post == null) {
      return res.status(404).json("Post with ID " + postId + " Not Found!");
    }

    //Check if post belongs to User that wants to update it
    if (post.userId == userId) {
      try {
        //Update post with data from body
        const updatedPost = await Post.findByIdAndUpdate(postId, {
          $set: req.body,
        });

        return res
          .status(200)
          .json("Post " + updatedPost._id + " has successfuly updated!");
      } catch (error) {
        console.log("LOG [/posts/:id] - UPDATE: " + error);
        //Send response to client side
        return res.status(500).json(error.message);
      }
    } else {
      return res.status(403).json("User can update only his personal posts!");
    }
  } catch (error) {
    console.log("LOG [/posts/:id] - UPDATE: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Delete Post route
router.delete("/:id", async (req, res) => {
  const postId = req.params.id;
  const userId = req.body.userId;

  try {
    const post = await Post.findById(postId);

    //If post is null then Post with specified ID is Not Found
    if (post == null) {
      return res.status(404).json("Post with ID " + postId + " Not Found!");
    }

    //Check if post belongs to User that wants to delete it
    if (post.userId == userId) {
      try {
        //Delete post with specified ID
        const deletedPost = await Post.findByIdAndDelete(postId);

        return res
          .status(200)
          .json("Post " + deletedPost._id + " has successfuly deleted!");
      } catch (error) {
        console.log("LOG [/posts/:id] - DELETE: " + error);
        //Send response to client side
        return res.status(500).json(error.message);
      }
    } else {
      return res.status(403).json("User can delete only his personal posts!");
    }
  } catch (error) {
    console.log("LOG [/posts/:id] - DELETE: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

//Like Post route
router.put("/like/:id", async (req, res) => {
  const postId = req.params.id;
  const userId = req.body.userId;

  try {
    const post = await Post.findById(postId);

    //If post is null then Post with specified ID is Not Found
    if (post == null) {
      return res.status(404).json("Post with ID " + postId + " Not Found!");
    }

    //Check if User already likes post with specified ID - if does then dislike it
    if (post.likes.includes(userId)) {
      try {
        //Update post with specified ID - update likes field
        const updatedPost = await Post.findByIdAndUpdate(postId, {
          $pull: { likes: userId },
        });

        return res
          .status(200)
          .json(
            "Post has successfuly disliked. Likes for post " +
              updatedPost._id +
              " has successfuly updated!"
          );
      } catch (error) {
        console.log("LOG [/posts/dislike/:id]: " + error);
        //Send response to client side
        return res.status(500).json(error.message);
      }
    }

    try {
      //Update post with specified ID - update likes field
      const updatedPost = await Post.findByIdAndUpdate(postId, {
        $push: { likes: userId },
      });

      return res
        .status(200)
        .json(
          "Post has successfuly liked. Likes for post " +
            updatedPost._id +
            " has successfuly updated!"
        );
    } catch (error) {
      console.log("LOG [/posts/like/:id]: " + error);
      //Send response to client side
      return res.status(500).json(error.message);
    }
  } catch (error) {
    console.log("LOG [/posts/like/:id]: " + error);
    //Send response to client side
    return res.status(500).json(error.message);
  }
});

module.exports = router;
