const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();

const dotenv = require("dotenv");
const courseRoute = require("./routes/courses")
const studentRoute = require("./routes/students");
const teacherRoute = require("./routes/teachers");
const answerRoute = require("./routes/answers")
const projectRoute = require("./routes/projects");
const contactRoute = require("./routes/contact");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => {
    console.error(err);
  });


app.use(express.json());

app.use("/api/courses", courseRoute);
app.use("/api/students", studentRoute);
app.use("/api/teachers", teacherRoute);
app.use("/api/answers", answerRoute);
app.use("/api/projects", projectRoute);
app.use("/api/contact", contactRoute);

// Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'client/build')));
  app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
} else{
  app.get("/", (req, res)=> {
    res.send("API running...");
  })
}








app.listen(process.env.PORT||8800, () => {
    console.log("Backend server is running!");
});