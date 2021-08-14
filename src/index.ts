import express from 'express';
import compression from 'compression';
import { sequelize } from './database';
import userRoutes from '@resources/user/user.route';
import morgan from 'morgan';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// Create Express server
const app = express();

// Connect to MongoDB

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.get('/', (req, res) => {
  res.send('hi');
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database Connection has been established successfully.');
    app.listen(3000, () => {
      console.log('server started successfully');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
})();

export default app;
