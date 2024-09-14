import CartItem, { ICartItem } from '../models/cart.model';

export const addToCart = async (productId: string, quantity: number): Promise<ICartItem | null> => {
  try {
    // Perform atomic increment or insert
    const cartItem = await CartItem.findOneAndUpdate(
      { product: productId }, // Filter
      { $inc: { quantity } }, // Increment quantity
      { new: true, upsert: true, returnOriginal: false } // Return the updated document, create if not exists
    ).exec();

    return cartItem;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw new Error('Failed to add item to cart');
  }
};

export const removeFromCart = async (cartItemId: string): Promise<void> => {
  await CartItem.findByIdAndDelete(cartItemId);
};

export const getCartDetails = async (): Promise<ICartItem[]> => {
  return await CartItem.find().populate('product');
};

export const getCartCounts = async (): Promise<number> => {
  const count = await CartItem.countDocuments();
  return count;
};
