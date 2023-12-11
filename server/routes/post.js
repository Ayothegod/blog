const express = require("express");
const routes = express.Router();
const { verifyJWT } = require("../middleware/verifyJwt");

const posts = [
  {
    title: "This us my first post from ayomide",
    desc: "In order to make this post, we have to be able to make stuff happen",
    author: "Ayomide",
  },
  {
    title: "This is ayomides post",
    desc: "second post from ayomide",
    author: "Ayomide",
  },
  {
    title: "This is a post from bishop",
    desc: "It needs to have a short descrtion",
    author: "Bishop",
  },
];
routes.get("/post", verifyJWT, (req, res) => {
    try {
    console.log(posts);
    const postData = posts.filter(post => post.author === req.user.username)

    res.status(200).json({postData});
  } catch (error) {
    console.log(error);
    res.status(500).json("Post endpoints error");
  }
});

module.exports = routes;
