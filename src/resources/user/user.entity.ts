import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import Order from '@root/resources/order/order.entity';

@Table
export default class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  birthday: Date;

  @HasMany(() => Order)
  orders: Order[];
}