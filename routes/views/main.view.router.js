const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { Watch } = require('../../db/models');

router.get('/', async (req, res) => {
  const watches = await Watch.findAll();
  res.send(
    res.renderComponent(MainPage, { title: 'Главная страница', watches })
  );
});

module.exports = router;
