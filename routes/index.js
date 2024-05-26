const router = require('express').Router();
const middleware = require('../config/middleware');

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/signup', middleware.checkUnAuthentication, require('./signup'));
router.use('/login',middleware.checkUnAuthentication, require('./login'));
router.use('/users',middleware.checkAuthentication, require('./users'));

module.exports = router;

