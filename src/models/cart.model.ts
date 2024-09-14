import mongoose, { Document, Schema } from 'mongoose';
import { IProduct } from './product.model';

export interface ICartItem extends Document {
  product: IProduct['_id'];
  quantity: number;
}

const CartItemSchema: Schema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true }  // Ensure this field is required
});

const CartItem = mongoose.model<ICartItem>('CartItem', CartItemSchema);

export default CartItem;
