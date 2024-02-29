const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Watch }) {
      this.belongsTo(Watch, { foreignKey: 'watchId' });
    }
  }
  Order.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      tel: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      selfOrder: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
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
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
