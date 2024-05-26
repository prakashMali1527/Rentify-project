const User = require('../models/user');
module.exports.signup = function (req, res) {
    return res.render('signup');
}

module.exports.createUser = async function (req, res) {

    const { firstName, lastName, phone, email, password, confirmPassword } = req.body;
    
    if (password != confirmPassword) {
        console.log('password mismatch');
        return res.send('<h1>Password Mismatch!!!</h1>');
    }
    try {
        let user = await User.findOne({ email });

        if (user) {
            console.log('User already exist');
            return res.redirect('back');
        }

        let newUser = await User.create({ firstName, lastName, phone, email, password });

        console.log('user created successfully');

        res.redirect('/login');
    } catch (err) {
        console.log('Error in creating User while Signing Up');
        return;
    }
}

