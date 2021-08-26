// import { Sequelize,  } from "sequelize-typescript";
import { sequelize } from '@root/database';
import { Repository } from 'sequelize-typescript';
import {
  CreateOptions,
  FindOptions,
  UpdateOptions,
  DestroyOptions
} from 'sequelize/types';
import Order from './order.entity';

const repo = sequelize.getRepository(Order);
export default class OrderService {
  orderRepository: Repository<Order>;
  constructor() {
    this.orderRepository = repo;
  }

  public async findAll(option?: FindOptions<Order>): Promise<Order[]> {
    return this.orderRepository.findAll(option || {});
  }
  public async createOrder(data: CreateOptions<Order>): Promise<Order> {
    return this.orderRepository.create(data, {
      returning: true
    });
  }
  public async updateOrder(id: number, data: Order): Promise<Order> {
    const [rows, [result]] = await this.orderRepository.update(data, {
      where: { id },
      returning: true
    });
    return result;
  }
  public async deleteOrder(id: number): Promise<number> {
    return this.orderRepository.destroy({
      where: {
        id
      }
    });
  }
}
