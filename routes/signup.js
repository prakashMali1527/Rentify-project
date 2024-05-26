const router = require('express').Router();

const signUpController = require('../controllers/signup_controller');

router.get('/', signUpController.signup);
router.post('/create-user', signUpController.createUser);

module.exports = router;

