
import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from './index';

export interface BlogAttributes {
  id: number;
  title: string;
  content: string;
  category: string;
}

export interface BlogCreationAttributes
  extends Optional<BlogAttributes, 'id'> { }

export interface BlogInstance
  extends Model<BlogAttributes, BlogCreationAttributes>,
  BlogAttributes {
  createdAt: Date;
  updatedAt: Date;
  findOne(options: object): Promise<BlogInstance>;
  destroy: (options?: any) => Promise<any>;
  findAll(options: object): Promise<BlogInstance[]>;
  create: (options?: any) => Promise<BlogInstance>;
}

const Blog = sequelize.define<BlogInstance>('Blogs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Blog;
