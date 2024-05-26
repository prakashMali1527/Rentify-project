const router = require('express').Router();
const middleware = require('../config/middleware');

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

router.get('/signout', usersController.signOut);

router.get('/delete-property/:id', usersController.deleteProperty);

router.post('/post-property', usersController.createProperty);



module.exports = router;

