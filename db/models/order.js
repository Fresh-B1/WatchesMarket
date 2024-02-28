const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Watch }) {
      this.belongsTo(Watch, { foreignKey: 'watchId' });
    }
  }
  Order.init({
    name: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    tel: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    selfOrder: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    img: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    watchId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Watches',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
