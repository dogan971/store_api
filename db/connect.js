const mongoose = require("mongoose");
const connectToDataBase = () => {
  mongoose
    .connect(process.env.mongo_url)
    .then(() => console.log("Server has been connected"))
    .catch((err) => console.error(err));
};

module.exports = connectToDataBase;
