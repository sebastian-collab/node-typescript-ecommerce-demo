import express from 'express';
import bodyParser from 'body-parser';

import orderRoutes  from './routes/order.routes';
import productRoutes from './routes/product.routes';
import cartRoutes from './routes/cart.routes';
import checkoutRoutes from './routes/checkout.routes'; 

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'src/views');


app.use('/', productRoutes); //consider product list as home
//app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/order', orderRoutes)


export default app;
