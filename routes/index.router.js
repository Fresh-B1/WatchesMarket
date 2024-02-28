const router = require('express').Router();

// views
const mainRouter = require('./views/main.view.router');
const authViewPage = require('./views/auth.view.router');

// api
const authApiRouter = require('./api/auth.api.router');

// route views
router.use('/', mainRouter);
router.use('/auth', authViewPage);

// route api
router.use('/api/auth', authApiRouter);

module.exports = router;
