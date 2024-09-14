import { Request, Response } from 'express';
import { getAllProducts, getProductById } from '../services/product.service';

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.render('productList', { products });
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('productDetail', { product });
  } catch (err) {
    res.status(500).send('Error fetching product details');
  }
};
