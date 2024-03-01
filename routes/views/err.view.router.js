const router = require('express').Router();
const { default: Page404 } = require('../../components/Page404');

router.get('/', async (req, res) => {
  try {
    res.status(404).send(res.renderComponent(Page404));
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
