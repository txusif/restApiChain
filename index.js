const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/:docId", (req, res) => {
  const docId = req.params.docId;
  const docList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  if (docList.includes(docId)) {
    res.send({ res: 100 });
  } else {
    res.send({ res: 0 });
  }
});

app.get("/tldr", (req, res) => {
  res.send("Hello Express App");
});

app.listen(port, () => {
  console.log("Server started!");
});
