const connect = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());

connect();

app.use("/user", require("./routes/user"));

app.listen(4500);
