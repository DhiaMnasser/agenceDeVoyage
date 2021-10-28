const express=require('express');
const connectDB = require('./config/db');
const eurekaHelper = require('./eureka-helper');

const app = express();
//connectDB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/hotel', require('./routes/api/hotel'));
app.get('/',(req,res)=>res.send('API Running'));
const PORT = process.env.PORT || 5001;
app.listen(PORT,() => console.log(`Server started on port ${PORT}`))
