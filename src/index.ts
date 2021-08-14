import express from "express";
import compression from "compression"; 
import { sequelize } from './database';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()


// Create Express server
const app = express();

// Connect to MongoDB

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

try {
  sequelize.sync();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
  process.exit(1)
}

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



export default app;