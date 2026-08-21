import app from "./server.js";
//const app = require("./server");

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});