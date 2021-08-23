const DB_NAME = process.env.DB_NAME || "TODO_APP";
const DB_PORT = process.env.DB_PORT || "27017";

const connectionURI = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

const mongoose = require("mongoose");
mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;
