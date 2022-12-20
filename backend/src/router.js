const express = require("express");

const router = express.Router();

const articleControllers = require("./controllers/articleControllers");
const { hashPassword } = require("./auth");
const usersControllers = require("./controllers/userControllers");

router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);
router.put("/articles/:id", articleControllers.edit);
router.post("/articles", articleControllers.add);
router.delete("/articles/:id", articleControllers.destroy);

const articles = [{ title: "Title", content: "Content" }];

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/api/login", usersControllers.login);
router.post("/users/", hashPassword, usersControllers.add);

router.get("/articles", (req, res) => {
  res.json(articles);
});

module.exports = router;
