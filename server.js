const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categories');

dotenv.config({path:'./config/config.env'});

const app = express();
const sequelizer = require('./config/dbconfig');
const Category = require('./models/categories');

const PORT = process.env.PORT || 9000;
app.use(express.json());


app.use('/categories',categoryRoutes);

app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`);
})