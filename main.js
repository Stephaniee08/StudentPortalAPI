require ('dotenv').config();
const express=require("express")
const mongoose = require('mongoose');
const studentRoute =require("./routes/studentRoutes.js")

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log ("MongoDB Connected"))
.catch(err=> console.error("Connection Error:",err));
const app = express()

const port = 9526

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/student",studentRoute)
app.listen(port, () => {
  console.log(`Server is running on port :${port}`)
})