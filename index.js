const express = require("express");
const Appetizer = require("appetizer");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const key = process.env.APPETIZER_API_KEY;

const appetizer = new Appetizer({
  key: key,
});

app.get("/list", (req, res) => {
  appetizer.list((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/create", (req, res) => {});

app.get("/*", (req, res) => {
  res.send("Error 404");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
