const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://datamanGett:3466ymoGxapSwDew@suredata.tgpgo9b.mongodb.net/";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db
