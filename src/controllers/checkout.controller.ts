import { Request, Response } from 'express';
import Product from '../models/product.model';

export const getCheckoutPage = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('checkout', { product });
  } catch (err) {
    res.status(500).send('Error fetching product details for checkout');
  }
};
