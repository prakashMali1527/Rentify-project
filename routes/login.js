const router = require('express').Router();

const loginController = require('../controllers/login_controller');

router.get('/', loginController.createSession);

module.exports = router;

