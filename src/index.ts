import express from 'express';
import compression from 'compression';
import { sequelize } from './database';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// Create Express server
const app = express();

// Connect to MongoDB

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database Connection has been established successfully.');
    app.listen(() => {
      console.log('server started successfully');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
})();

export default app;
