import { Sequelize } from 'sequelize-typescript';
import Order from '@resources/order/order.entity';
import User from '@resources/user/user.entity';
import Product from '@resources/product/product.entity';
import OrderItems from '@root/resources/order/orderItem/orderItem.entity';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const db: any = {};
console.log(process.env.DB_HOST, process.env.DB_USER);
export const sequelize = new Sequelize({
  repositoryMode: true,
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_USER,
  port: parseInt(process.env.DB_PORT),
  models: [User, Order, OrderItems, Product]
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
