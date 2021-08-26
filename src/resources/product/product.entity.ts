import { Table, Column, Model, CreatedAt, HasMany } from 'sequelize-typescript';
import OrderItems from '@root/resources/order/orderItem/orderItem.entity';

@Table
export default class Product extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  merchant_id: number;

  @Column
  price: number;

  @Column({ values: ['active', 'pending', 'disable'] })
  status: string;

  @HasMany(() => OrderItems)
  order_items: OrderItems[];

  @CreatedAt
  created_at: Date;
}
