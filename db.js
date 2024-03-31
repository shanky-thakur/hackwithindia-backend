const mongoose = require("mongoose");

const connect = async () => {
  var db = await mongoose.connect(
    "mongodb+srv://Shanky-Thakur:SippuShanky@cluster0.iw4hnbh.mongodb.net/"
  );
};

module.exports = connect;
