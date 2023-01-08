const express = require("express");

const router = express.Router();

const communicationPlansControllers = require("./controllers/communicationPlansControllers");
const { hashPassword } = require("./auth");
const usersControllers = require("./controllers/userControllers");

router.get("/communication-plans", communicationPlansControllers.browse);
router.get("/communication-plans/:id", communicationPlansControllers.read);
router.put("/communication-plans/:id", communicationPlansControllers.edit);
router.post("/communication-plans", communicationPlansControllers.add);
router.delete(
  "/communication-plans/:id",
  communicationPlansControllers.destroy
);

const articles = [
  {
    title: "Title",
    content: "Content",
    image_url: "https://picsum.photos/200/300",
  },
];

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/api/login", usersControllers.login);
router.post("/users/", hashPassword, usersControllers.add);
router.put("/users/:id", usersControllers.edit);

router.get("/communication-plans", (req, res) => {
  res.json(articles);
});

module.exports = router;
