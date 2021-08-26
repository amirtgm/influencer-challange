import { Response, Request } from 'express';
import OrderItemService from './orderItem.service';

const orderItemService = new OrderItemService();
export const getOrderItems = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { order_id } = req.params;
  const orderItems = await orderItemService.findAll(parseInt(order_id));
  return res.status(200).send(orderItems);
};

export const createOrderItem = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { order_id } = req.params;
  const data = req.body;
  data.order_id = order_id;
  const orderItems = await orderItemService.createOrderItem(data);
  return res.status(200).send(orderItems);
};

export const deleteOrderItem = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { order_id, id } = req.params;
  const orderItems = await orderItemService.deleteOrderItem(
    parseInt(order_id),
    parseInt(id)
  );
  return res.status(200).send(orderItems);
};
