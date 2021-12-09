const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU" },
    category: { type: String, default: "teacher"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);