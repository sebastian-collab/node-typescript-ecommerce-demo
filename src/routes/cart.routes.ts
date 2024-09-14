import { Router } from 'express';
import { addItemToCart, removeItemFromCart, getCartDetail, getCartCount } from '../controllers/cart.controller';

const router = Router();

router.post('/add', addItemToCart);  
router.post('/remove', removeItemFromCart);  
router.get('/cartDetails', getCartDetail);  
router.get('/count', getCartCount);  

export default router;
