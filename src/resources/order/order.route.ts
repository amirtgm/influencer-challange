import express from 'express';
import {
  createOrder,
  deleteOrder,
  findAllProducts,
  findOrder,
  getOrders,
  updateOrder
} from './order.controller';
import {
  createOrderItem,
  getOrderItems
} from './orderItem/orderItem.controller';

const router = express.Router();

router.get('/:id', findOrder);
router.put('/:id', updateOrder);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);
router.get('/:id/products', findAllProducts);
router.get('/', getOrders);
router.post('/', createOrder);

router.get('/:order_id/order_items', getOrderItems);
router.post('/:order_id/order_items', createOrderItem);
router.delete('/:order_id/order_items/:id', createOrderItem);

export default router;
