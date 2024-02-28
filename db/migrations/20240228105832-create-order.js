/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tel: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      selfOrder: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      img: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      watchId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Watches',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
