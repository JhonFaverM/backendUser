const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const config = require('./config/config')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//app.use("/", require("./route/index"));

http.listen(config.port, () => {
  console.log("Server is running in port", config.port);
});
app.use("/", require("./route/index"));