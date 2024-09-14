import { Router } from 'express';
import { getCheckoutPage } from '../controllers/checkout.controller';

const router = Router();

router.get('/:productId', getCheckoutPage); 

export default router;
