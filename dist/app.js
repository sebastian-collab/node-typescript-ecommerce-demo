"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const cart_routes_1 = __importDefault(require("./routes/cart.routes"));
const checkout_routes_1 = __importDefault(require("./routes/checkout.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use('/', product_routes_1.default); //consider product list as home
//app.use('/products', productRoutes);
app.use('/cart', cart_routes_1.default);
app.use('/checkout', checkout_routes_1.default);
app.use('/order', order_routes_1.default);
exports.default = app;
