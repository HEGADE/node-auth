const mongoose = require("mongoose");
mongoose
  .connect(" mongodb://127.0.0.1:27017/userData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then(() => {
    console.log("data base connected");
  })
  .catch((e) => {
    console.log(e);
  });

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,"user name must be required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true,'password must be required'],
  },
});
UserData = new mongoose.model("userdata", UserSchema);
module.exports = UserData;
