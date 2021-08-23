const DB_NAME = process.env.DB_NAME || "TODO_APP";

const connectionURI = `mongodb://localhost:27017/${DB_NAME}`;

const mongoose = require("mongoose");
mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;
