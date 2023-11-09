const express = require("express");

const app = express();
const port = 6969;

require("./routes")(app);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
