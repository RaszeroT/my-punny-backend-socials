// establish mongoose connection
const { connect, connection } = require("mongoose");

// listen on mongoDB compass and create database name -- mySocialsDB
const connectionString =
  process.env.MONGOD_URI || "mongodb://127.0.0.1:27017/mySocialsDB";

connect(connectionString);

module.exports = connection;
