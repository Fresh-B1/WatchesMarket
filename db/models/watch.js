const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'watchId' });
    }
  }
  Watch.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Watch',
    },
  );
  return Watch;
};
