const router = require('express').Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));

module.exports = router;

