const express=require('express');
const { config } = require("./config/config");
const connectDB = require("./config/db");
const eurekaHelper = require('./eureka-helper');
const cors = require("cors");

const app = express();
app.use(cors());


//connectDB
connectDB()
// connect(config.mongo.url);

// Init Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Define Routes
app.use('/api/hotel', require('./routes/api/hotel'));
app.get('/',(req,res)=>res.send('API Running'));
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server started on port ${PORT}`))
eurekaHelper.registerWithEureka('hotel-service', PORT);
