const express = require("express");
const app = express();

const port = process.env.PORT || 3000;  // Azure の環境変数 PORT を使用

app.get("/", (req, res) => {
  res.send("Hello, Azure!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

