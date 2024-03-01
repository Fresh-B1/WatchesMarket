const router = require('express').Router();
const { Order } = require('../../db/models');
const OrdersPage = require('../../components/OrdersPage');

router.get('/', async (req, res) => {
  const order = await Order.findAll();
  res.send(res.renderComponent(OrdersPage, { title: 'Orders page', order }));
});

module.exports = router;
