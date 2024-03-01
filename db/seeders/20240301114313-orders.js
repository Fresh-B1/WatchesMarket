'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          name: 'John Doe',
          email: 'johny@gmail.com',
          tel: '89919119911',
          img: 'https://timbersun.ru/wp-content/webpc-passthru.php?src=https://timbersun.ru/wp-content/uploads/2020/10/iron-1-2.jpg&nocache=1',
          description: 'Хочу что-то примерно такое.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John Zhukov',
          email: 'johnyy@gmail.com',
          tel: '89919119912',
          img: 'https://timbersun.ru/wp-content/webpc-passthru.php?src=https://timbersun.ru/wp-content/uploads/2020/09/gentelman-1-.jpg&nocache=1',
          description: 'Не знаю как обьяснить, но можно что-нибудь типа такого шлепнуть.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
