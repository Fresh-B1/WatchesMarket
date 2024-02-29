const router = require('express').Router();

const { Watch } = require('../../db/models');

router.get('/', async (res, req) => {
  try {
    const watches = await Watch.findAll();
    res.status(200).json(watches);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
