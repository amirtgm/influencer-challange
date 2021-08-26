import { sequelize } from '@root/database';
import express, { Response, Request } from 'express';
import Order from './order.entity';
import OrderService from './order.service';
import OrderItem from './orderItem/orderItem.entity';

const orderService = new OrderService();

export const getOrders = async (req: Request, res: Response): Promise<any> => {
  const orders = await orderService.findAll();
  return res.status(200).send(orders);
};
export const findOrder = async (req: Request, res: Response): Promise<any> => {
  const orders = await orderService.findAll({
    where: {
      id: req.params.id
    }
  });
  console.log(orders);
  return res.status(200).send(orders[0]);
};

export const createOrder = async (
  req: Request,
  res: Response
): Promise<any> => {
  const data = req.body;
  const orders = await orderService.createOrder(data);
  return res.status(200).send(orders);
};

export const findAllProducts = async (
  req: Request,
  res: Response
): Promise<any> => {
  const orderItem = sequelize.getRepository(OrderItem);
  // orderItem;
  const order = await orderService.findAll({
    where: {
      id: req.params.id
    },

    include: [orderItem]
  });
  console.log(order[0]);
  return res.status(200).send(order[0]);
};

export const updateOrder = async (
  req: Request,
  res: Response
): Promise<any> => {
  const data = req.body;
  const { id } = req.params;
  const orders = await orderService.updateOrder(parseInt(id), data);
  return res.status(200).send(orders);
};

export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  const orders = await orderService.deleteOrder(parseInt(id));
  return res.status(200).send(orders);
};
