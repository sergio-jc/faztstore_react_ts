import { Request, Response } from "express";
import Product from "../models/product.model";

export const getProductsHandler = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.send(products);
};

export const createProductHandler = async (req: Request, res: Response) => {
  const { name, price, description, stock } = req.body;
  const product = new Product({
    name,
    price,
    description,
    stock,
  });
  const productSaved = await product.save();
  res.json(productSaved);
};

export const updateProductHandler = (req: Request, res: Response) => {
  res.send("updating posts");
};

export const deleteProductHandler = async (req: Request, res: Response) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.json(deleteProduct);
};

export const getProductHandler = (req: Request, res: Response) => {
  res.send("getting post");
};
