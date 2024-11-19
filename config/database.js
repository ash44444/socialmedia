const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(
      process.env.MONGO_URI ||
        "mongodb+srv://AshishManer:tRuQ7ZizP1geZrei@cluster0.b8asuxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
