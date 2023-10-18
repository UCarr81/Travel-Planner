const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traveller_amount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    traveller_id: {
        type: DataTypes.INTEGER,
        refrences: {
            model: 'traveller',
            key: 'id',
        },
    },
    location_id: {
        type: DataTypes.INTEGER,
        refrences: {
            model: 'location',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips'
  }
);

module.exports = Book;
