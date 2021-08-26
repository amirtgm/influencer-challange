import {
  Table,
  Column,
  Model,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  HasMany
} from 'sequelize-typescript';
import User from '@root/resources/user/user.entity';
import OrderItems from '@root/resources/order/orderItem/orderItem.entity';

@Table
export default class Order extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => OrderItems)
  orders_items: OrderItems[];

  @CreatedAt
  created_at: Date;
}
