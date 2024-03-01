const router = require('express').Router();
const { Order } = require('../../db/models');
const { upload } = require('../../middleware/multer');

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { name, email, tel, description } = req.body;

    const newFileUrl = `/img/${req.file.originalname}`;

    const data = {
      img: newFileUrl,
      name,
      email,
      tel,
      description,
    };
    const watch = await Order.create(data);
    res.status(201).json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
