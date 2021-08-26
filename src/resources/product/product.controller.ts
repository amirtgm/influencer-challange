import express, { Response, Request } from 'express';
import Product from './product.entity';
import ProductService from './product.service';

const productService = new ProductService();
export const getProducts = async (
  req: Request,
  res: Response
): Promise<any> => {
  const products = await productService.findAll();
  return res.status(200).send(products);
};
export const findProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const products = await productService.findAll({
    where: {
      id: req.params.id
    }
  });
  console.log(products);
  return res.status(200).send(products[0]);
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const data = req.body;
  const products = await productService.createProduct(data);
  return res.status(200).send(products);
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const data = req.body;
  const { id } = req.params;
  const products = await productService.updateProduct(parseInt(id), data);
  return res.status(200).send(products);
};

export const createOrUpdate = async (
  req: Request,
  res: Response
): Promise<any> => {
  const data = req.body;
  const products = await productService.updateOrInsert(data);
  return res.status(200).send(products);
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  const products = await productService.deleteProduct(parseInt(id));
  return res.status(200).send(products);
};
