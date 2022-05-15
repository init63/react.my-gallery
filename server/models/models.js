import sequelize from '../db.js';
import {DataTypes} from 'sequelize';

const Image = sequelize.define('image', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  order: {type: DataTypes.INTEGER, unique: true},
  file_name: {type: DataTypes.STRING, allowNull: true},
  description: {type: DataTypes.STRING, allowNull: true},
});

export {Image};
