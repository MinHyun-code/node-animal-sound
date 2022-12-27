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
    res.json({
      sound: "야옹",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.post.naver.com%2Fviewer%2FpostView.naver%3FvolumeNo%3D27619351%26memberNo%3D2247263&psig=AOvVaw2aR2nMDV8sV4MAO6FDF3Cl&ust=1672202044635000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDPp5r8mPwCFQAAAAAdAAAAABAD",
    });
  } else if (name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(port);
