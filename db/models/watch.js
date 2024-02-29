const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    static associate({ Order }) {
<<<<<<< HEAD
      this.hasMany(Order, { foreignKey: 'watchID' });
=======
      this.hasMany(Order, { foreignKey: 'watchId' });
>>>>>>> 3b6d8cd600b4e34515be15f3bdd3c7bd502aa398
    }
  }
  Watch.init(
    {
      title: {
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
    }
  );
  return Watch;
};
