const router = require('express').Router();
const middleware = require('../config/middleware');

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

router.get('/signout', usersController.signOut);

module.exports = router;

