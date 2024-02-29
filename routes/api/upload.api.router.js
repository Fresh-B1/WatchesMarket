const router = require('express').Router();
const { Order } = require('../../db/models');
const { upload } = require('../../middleware/multer');

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { name, email, tel } = req.body;

    const newFileUrl = `/img/${req.file.originalname}`;

    const data = {
      name,
      email,
      img: newFileUrl,
      tel,
      selfOrder: false,
      watchId: 5,
    };
    const watch = await Order.create(data);
    res.status(201).json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
