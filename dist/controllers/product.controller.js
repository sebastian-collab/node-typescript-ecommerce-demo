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
exports.getProduct = exports.listProducts = void 0;
const product_service_1 = require("../services/product.service");
const listProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_service_1.getAllProducts)();
        res.render('productList', { products });
    }
    catch (err) {
        res.status(500).send('Error fetching products');
    }
});
exports.listProducts = listProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, product_service_1.getProductById)(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('productDetail', { product });
    }
    catch (err) {
        res.status(500).send('Error fetching product details');
    }
});
exports.getProduct = getProduct;
