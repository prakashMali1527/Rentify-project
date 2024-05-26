const router = require('express').Router();

const loginController = require('../controllers/login_controller');

router.get('/', loginController.login);
router.post('/create-session', loginController.createSession);

module.exports = router;

