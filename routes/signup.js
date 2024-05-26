const router = require('express').Router();

const signUpController = require('../controllers/signup_controller');

router.get('/', signUpController.create);

module.exports = router;

