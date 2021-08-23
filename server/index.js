"use strict";
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const app = require("./server");
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app available at http://localhost:${PORT}`);
});
