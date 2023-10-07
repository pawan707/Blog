const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require("./config/db");
//env config
dotenv.config();

//router import
const userRoutes = require('./routes/userRoute')
const blogRoutes = require('./routes/blogRoutes')


//mongodb connection
connectDB();

//rest objecct
const app = express()

//middelwares 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
// app.get('/', (req, res) => {
//     res.status(200).send({
//         Message:"Node server",
//     });
// });
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);

//Port
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT, () =>{
    console.log(`Server Ruuning on ${process.env.DEV_MODE} port no ${PORT}`. bgCyan.white);
});