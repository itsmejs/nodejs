const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();

// const homepage = require("./routes/home");
const shopPage = require("./routes/shop");
const adminpage = require("./routes/admin");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views engine", "views");
app.set("views", "views");

app.use("/admin", adminpage);
app.use(shopPage);

app.use((req, res, next) => {
  res.send("<h1>this is Error page</h2>");
});

app.listen("1450");
