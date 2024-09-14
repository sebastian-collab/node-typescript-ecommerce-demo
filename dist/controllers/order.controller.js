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
exports.confirmOrder = void 0;
const cart_model_1 = __importDefault(require("../models/cart.model"));
const confirmOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('call invoked');
    try {
        yield cart_model_1.default.deleteMany({}); //it will clear all intentionally for ui updation :)
        res.render('orderSummary', {
            message: 'Order Placed Successfully!',
        });
    }
    catch (err) {
        console.error('Error confirming order:', err);
        res.status(500).send('Error confirming order');
    }
});
exports.confirmOrder = confirmOrder;
