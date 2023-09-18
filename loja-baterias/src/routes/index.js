const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const api = require("./api");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  next();
});

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
