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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartCounts = exports.getCartDetails = exports.removeFromCart = exports.addToCart = void 0;
const cart_model_1 = __importDefault(require("../models/cart.model"));
const addToCart = (productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Perform atomic increment or insert
        const cartItem = yield cart_model_1.default.findOneAndUpdate({ product: productId }, // Filter
        { $inc: { quantity } }, // Increment quantity
        { new: true, upsert: true, returnOriginal: false } // Return the updated document, create if not exists
        ).exec();
        return cartItem;
    }
    catch (error) {
        console.error('Error adding to cart:', error);
        throw new Error('Failed to add item to cart');
    }
});
exports.addToCart = addToCart;
const removeFromCart = (cartItemId) => __awaiter(void 0, void 0, void 0, function* () {
    yield cart_model_1.default.findByIdAndDelete(cartItemId);
});
exports.removeFromCart = removeFromCart;
const getCartDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_model_1.default.find().populate('product');
});
exports.getCartDetails = getCartDetails;
const getCartCounts = () => __awaiter(void 0, void 0, void 0, function* () {
    const count = yield cart_model_1.default.countDocuments();
    return count;
});
exports.getCartCounts = getCartCounts;
