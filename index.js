require("dotenv").config();
const urlMetadata = require("url-metadata");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello welcome to MetaTagy",
  });
});

app.get("/metadata", (req, res) => {
  var myurl = req.query.q;
  var portion = myurl.slice(0, 4);
  console.log(myurl);
  if (portion != "http") {
    myurl = `http://${myurl}`;
    // console.log(myurl);
  }
  urlMetadata(myurl).then(
    function (metadata) {
      // setTimeout(() => {
      res.status(200).json(metadata);
      console.log(metadata);
      // }, 3000);
    },
    function (error) {
      // console.log(error);
      const errors = { ...error, errorStatus: true };
      res.status(400).json(errors);
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log("server is up and running !");
});
