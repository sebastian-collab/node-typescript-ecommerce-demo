import { Request, Response } from 'express';
import { addToCart, removeFromCart, getCartDetails, getCartCounts } from '../services/cart.service';

export const addItemToCart = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ success: false, message: 'Product ID and quantity are required.' });
    }

    const cartItem = await addToCart(productId, quantity);
    console.log(cartItem)
    return res.redirect('/cart/cartDetails');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    return res.status(500).json({ success: false, message: 'Failed to add item to cart' });
  }
};

export const removeItemFromCart = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.body;
    await removeFromCart(itemId);
    res.redirect('/cart/cartDetails');
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getCartDetail = async (req: Request, res: Response) => {
  try {
    const cartItems = await getCartDetails();
    res.render('cart', { cartItems });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getCartCount = async (req: Request, res: Response) => {
  try {
    const count = await getCartCounts();
    res.json({ count });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
