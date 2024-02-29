'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Watches',
      [
        {
          title: 'Cosmograph Daytona',
          img: 'https://content.rolex.com/v7/dam/new-watches/2023/family-collection/cosmograph-daytona/landing-page/roller-legendary-design/professional-watches-cosmograph-daytona-a-legendary-design-platinum-m126506-0001_2301ac_001.jpg?imwidth=640://content.rolex.com/v7/dam/new-watches/2023/stewart/mini-site-collection/landing-page/professional-watches-cosmograph-daytona-m126529ln-0001_2302jva_001_full.jpg?imwidth=1920',
          price: 360000,
          description:
            'Выпущенные в 1963 году часы Cosmograph Daytona давно вышли за рамки просто произведения часового искусства и стали легендой. Именно название модели, которое прочно ассоциируется со знаменитой гоночной трассой, и характерный графичный циферблат сделали ее культовой. Тем не менее, сердцем этого исключительного хронографа стал легендарный механизм, полностью разработанный и изготовленный на Мануфактуре Rolex, который гарантирует непревзойденную точность в любых обстоятельствах. Модель Cosmograph Daytona, которая постоянно совершенствуется с течением времени, доказала свою надежность и точность.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Datejust',
          img: 'https://content.rolex.com/v7/dam/new-watches/2023/family-collection/cosmograph-daytona/landing-page/roller-legendary-design/professional-watches-cosmograph-daytona-a-legendary-design-rolesor-m126503-0001_2301ac_001.jpg?imwidth=640',
          price: 390000,
          description:
            'Каждый день может навсегда изменить жизнь и создать условия для новых стремлений. С момента своего появления в 1945 году часы Datejust продолжают совершенствоваться, оставаясь при этом образцом классической элегантности в понимании Rolex. Ознаменовав прорыв в истории часового производства, они стали первым наручным водонепроницаемым автоматическим хронометром с индикатором даты в окошке на циферблате. Эти цифры, увеличенные с помощью линзы Cyclops, подсказывают, что несмотря на то, что день состоит из 24 часов, сделать его памятным – задача каждого из нас.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Submariner',
          img: 'https://content.rolex.com/v7/dam/new-watches/2023/family-collection/cosmograph-daytona/landing-page/roller-legendary-design/professional-watches-cosmograph-daytona-a-legendary-design-white-dial-m126500ln-0001_2301ac_001.jpg?imwidth=640',
          price: 330000,
          description:
            'Вращающийся в одном направлении безель является ключевой особенностью часов Submariner. Его выгравированная 60‑минутная шкала гарантирует точность и надежность показаний времени погружения. Безель Cerachrom, изготовленный Rolex из твердой и устойчивой к коррозии керамики, противостоит появлению царапин и сохраняет яркость цвета, несмотря на воздействие ультрафиолетовых лучей, а также морской или хлорированной воды. Кроме того, благодаря своему химическому составу эта высокотехнологичная керамика инертна и устойчива к коррозии.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Watches', null, {});
  },
};
