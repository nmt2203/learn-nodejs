const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();

// var corOptions = {
//   origin: "http://localhost:8081",
// };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = require("./routes/productRouter");

app.use("/api/products", router);

// app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "aaaaaaaaa" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server run on port:  ${PORT}`);
});
