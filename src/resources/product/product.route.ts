import express from 'express';
import {
  createOrUpdate,
  createProduct,
  deleteProduct,
  findProduct,
  getProducts,
  updateProduct
} from './product.controller';

const router = express.Router();

router.get('/:id', findProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/', getProducts);
router.put('/', createOrUpdate);
router.post('/', createProduct);

export default router;
