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
const Category = require('./models/relations');
const Brand = require('./models/relations');
const Product = require('./models/relations');
const Customer = require('./models/relations');
const Order = require('./models/relations');
const Orderlist = require('./models/relations');
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