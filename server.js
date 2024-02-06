// establish connections to packages and file paths
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

//listen for PORT
const PORT = process.env.PORT || 3001;
const app = express();

// invoke middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// listening
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
  });
});


