const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const authRoute=require("./routes/auth");
const studentRoute=require("./routes/student");
const courseRoute=require("./routes/course");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const bcrypt=require("bcrypt");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},()=>{
    console.log("Connected");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth",authRoute);
app.use("/api/student",studentRoute);
app.use("/api/course",courseRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(8800,()=>{
console.log("backend server");
})