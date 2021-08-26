import {
  Table,
  Column,
  Model,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  DefaultScope
} from 'sequelize-typescript';
import Product from '@resources/product/product.entity';
import Order from '@resources/order/order.entity';

@DefaultScope(() => ({
  include: [
    {
      association: 'product'
    }
  ]
}))
@Table
export default class OrderItems extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Order)
  @Column
  order_id: number;

  @BelongsTo(() => Order)
  order: Order;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;

  @CreatedAt
  created_at: Date;

  @Column
  countery_code: number;
}
