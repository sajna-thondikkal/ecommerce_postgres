const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categories');
const brandRoutes = require('./routes/brands');
const productRoutes = require('./routes/products');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');
const orderlistRoutes = require('./routes/orderlist');

dotenv.config({path:'./config/config.env'});

const app = express();
const sequelizer = require('./config/dbconfig');
const Category = require('./models/categories');
const Brand = require('./models/brands');
const Product = require('./models/products');
const Customer = require('./models/customers');
const Order = require('./models/orders');
const Orderlist = require('./models/orderlist');
const errorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 9000;
app.use(express.json());


app.use('/categories',categoryRoutes);
app.use('/brands',brandRoutes);
app.use('/products',productRoutes);
app.use('/customers',customerRoutes);
app.use('/orders',orderRoutes);
app.use('/orderlists',orderlistRoutes);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`);
})