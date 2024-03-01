const router = require('express').Router();

// views
const mainRouter = require('./views/main.view.router');
const authViewPage = require('./views/auth.view.router');
const ordersViewPage = require('./views/orders.view.router');
const errRouter = require('./views/err.view.router');

// api
const mainApiRouter = require('./api/main.api.router');
const authApiRouter = require('./api/auth.api.router');
const uploadRouter = require('./api/upload.api.router');

// route views
router.use('/', mainRouter);
router.use('/auth', authViewPage);
router.use('/orders', ordersViewPage);

// route api
router.use('/api', mainApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/upload', uploadRouter);
router.use('*', errRouter);

module.exports = router;
