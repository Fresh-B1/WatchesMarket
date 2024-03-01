const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');

router.post('/', async (req, res) => {
  let user;
  try {
    const { name, password } = req.body;

    user = await User.findOne({
      where: { name },
      attributes: ['name', 'password'],
    });
    console.log(user);
    if (!user) {
      res.json({ message: 'Такого пользователя нет или пароль неверный' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: 'Такого пользователя нет или пароль неверный' });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({ user });

    // устанавливаем куки
    res
      .cookie('access', accessToken)
      .cookie('refresh', refreshToken)
      .status(201)
      .json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/logout', (req, res) => {
  try {
    res.locals.user = undefined;
    res.clearCookie('access').clearCookie('refresh');
    res.redirect('/');
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
