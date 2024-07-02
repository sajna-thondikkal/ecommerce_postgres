const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categories');
const brandRoutes = require('./routes/brands');
const productRoutes = require('./routes/products');
const userRoleRoute = require('./routes/roles');
const userRoute = require('./routes/users');
const orderRoutes = require('./routes/orders');
// const orderlistRoutes = require('./routes/orderlist');

dotenv.config({path:'./config/config.env'});

const app = express();
const sequelizer = require('./config/dbconfig');
const Category = require('./models/categories');
const Brand = require('./models/brands');
const Product = require('./models/products');
const Role = require('./models/roles');
const User = require('./models/users');
const Order = require('./models/orders');
const OrderLineItems = require('./models/orders');


sequelizer.sync().then((result) => {
    console.log("---Models created succesfully---");
}).catch((err) => {
    console.log('---Models not created---');
});
// const Order = require('./models/relations');
const errorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 9000;
app.use(express.json());


app.use('/categories',categoryRoutes);
app.use('/brands',brandRoutes);
app.use('/products',productRoutes);
app.use('/roles',userRoleRoute);
app.use('/users',userRoute);
app.use('/orders',orderRoutes);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`);
})