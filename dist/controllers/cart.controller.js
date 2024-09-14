"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartCount = exports.getCartDetail = exports.removeItemFromCart = exports.addItemToCart = void 0;
const cart_service_1 = require("../services/cart.service");
const addItemToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, quantity } = req.body;
        if (!productId || !quantity) {
            return res.status(400).json({ success: false, message: 'Product ID and quantity are required.' });
        }
        const cartItem = yield (0, cart_service_1.addToCart)(productId, quantity);
        console.log(cartItem);
        return res.redirect('/cart/cartDetails');
    }
    catch (error) {
        console.error('Error adding item to cart:', error);
        return res.status(500).json({ success: false, message: 'Failed to add item to cart' });
    }
});
exports.addItemToCart = addItemToCart;
const removeItemFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { itemId } = req.body;
        yield (0, cart_service_1.removeFromCart)(itemId);
        res.redirect('/cart/cartDetails');
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.removeItemFromCart = removeItemFromCart;
const getCartDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartItems = yield (0, cart_service_1.getCartDetails)();
        res.render('cart', { cartItems });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getCartDetail = getCartDetail;
const getCartCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield (0, cart_service_1.getCartCounts)();
        res.json({ count });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getCartCount = getCartCount;
