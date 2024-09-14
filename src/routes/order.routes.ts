import { Router } from 'express';
import { confirmOrder } from '../controllers/order.controller';

const router = Router();

router.get('/confirm', confirmOrder);  

export default router;
