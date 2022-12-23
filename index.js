const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/user/:id", (req, res) => {
  //   const q = req.params;
  //   console.log(q.id);
  const q = req.query;
  console.log(q);

  res.json({ userid: q.id });
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else if (name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(port);
