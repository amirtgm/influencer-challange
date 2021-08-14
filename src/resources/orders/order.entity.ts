import {
  Table,
  Column,
  Model,
  CreatedAt,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import User from '@resources/users/user.entity';

@Table
export default class Order extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @CreatedAt
  created_at: Date;

  @Column
  countery_code: number;
}
