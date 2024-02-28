const router = require('express').Router();
const AuthorizationPage = require('../../components/AuthorizationPage');

//страница авторизации
router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(AuthorizationPage, { title: 'Auth' });
    res.send(html);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
