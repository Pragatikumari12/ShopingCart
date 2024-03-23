const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const app = express()
const dotenv = require ('dotenv').config()

// mongoose connection after express
mongoose.connect("mongodb+srv://pk02082001:Abc1234@todolist.cazndug.mongodb.net/ecommerce_revision?retryWrites=true&w=majority")
.then(()=>console.log("Connected"))
.catch(err=>console.log("Error while connecting",err))



app.use(express.json())
// use function express 
app.use(cors())

app.use(require('./routes/userRoutes'));
app.use(require('./routes/productRoutes'));
app.use(require('./routes/authRoutes'));
app.use(require('./routes/categoryRoutes'))
app.use(require('./routes/orderRoutes'));
app.use(require('./routes/fileRouters'))

app.listen(5000, ()=>{
    console.log("server running");
})
