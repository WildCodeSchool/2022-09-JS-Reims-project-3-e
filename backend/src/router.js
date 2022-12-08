router.delete("/items/:id", itemControllers.destroy);

module.exports = router;

const articles = [
  { title: "Lorem ipsum 1", content: "Lorem ipsum 1" },
  { title: "Lorem ipsum 2", content: "Lorem ipsum 2" },
];

router.get("/articles", (req, res) => {
  res.json(articles);
});

module.exports = router;
