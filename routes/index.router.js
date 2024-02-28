const router = require('express').Router();

// views
const mainRouter = require('./views/main.view.router');

// api

// route views
router.use('/', mainRouter);

// route api

module.exports = router;
