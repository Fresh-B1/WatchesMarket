const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { Watch } = require('../../db/models');

router.get('/', async (req, res) => {
  res.send(res.renderComponent(MainPage, { title: 'Главная страница' }));
});

module.exports = router;
