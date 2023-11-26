const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ServicioDeLavado", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
