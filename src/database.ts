import { Sequelize } from "sequelize-typescript";
import Order from "./resources/orders/order.entity";
import User from "./resources/users/user.entity";


export const sequelize =  new Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT),
    models: [User, Order],
});