import { Sequelize } from 'sequelize';
import { BlogInstance } from './blog';
const env = process.env.NODE_ENV || 'development';
const config = require('../../database/config/config.js')[env];

interface Database {
  sequelize: Sequelize;
  Blog: BlogInstance;
}

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db: Database = {
  sequelize,
  Blog: require('./blog').default,
};

export default db;
