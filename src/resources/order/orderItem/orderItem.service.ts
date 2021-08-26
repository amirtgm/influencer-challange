// import { Sequelize,  } from "sequelize-typescript";
import { sequelize } from '@root/database';
import { Repository } from 'sequelize-typescript';
import { CreateOptions, FindOptions } from 'sequelize/types';
import OrderItem from './orderItem.entity';

const repo = sequelize.getRepository(OrderItem);
export default class OrderItemService {
  orderItemRepository: Repository<OrderItem>;
  constructor() {
    this.orderItemRepository = repo;
  }

  public async findAll(
    orderId: number,
    option: FindOptions<OrderItem> = {}
  ): Promise<OrderItem[]> {
    return this.orderItemRepository.findAll(
      Object.assign(option, {
        where: {
          order_id: orderId
        }
      })
    );
  }

  public async createOrderItem(
    data: CreateOptions<OrderItem>
  ): Promise<OrderItem> {
    return this.orderItemRepository.create(data, {
      returning: true
    });
  }
  public async deleteOrderItem(orderId: number, id: number): Promise<number> {
    return this.orderItemRepository.destroy({
      where: {
        order_id: orderId,
        id
      }
    });
  }
}
