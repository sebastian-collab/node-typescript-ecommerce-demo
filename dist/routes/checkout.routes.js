"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkout_controller_1 = require("../controllers/checkout.controller");
const router = (0, express_1.Router)();
router.get('/:productId', checkout_controller_1.getCheckoutPage);
exports.default = router;
