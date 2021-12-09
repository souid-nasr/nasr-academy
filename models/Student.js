const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfoU4jaP_y6-LiF2sKa3Etmyw4xSHY7n8PA&usqp=CAU"  },
    category: { type: String, default: "student",required: true, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);