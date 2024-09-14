import { Request, Response } from 'express';
import CartItem from '../models/cart.model';

export const confirmOrder = async (req: Request, res: Response) => {
  console.log('call invoked');
  try {
    await CartItem.deleteMany({}); //it will clear all intentionally for ui updation :)
    res.render('orderSummary', {
      message: 'Order Placed Successfully!',
    });
  } catch (err) {
    console.error('Error confirming order:', err);
    res.status(500).send('Error confirming order');
  }
};