const User = require('../models/user');
module.exports.login = function (req, res) {
    return res.render('login');
}

module.exports.createSession = async function (req, res) {

    const { email, password } = req.body;
    try {
        //find the user
        let user = await User.findOne({ email }).select('+password');

        // validate user
        if (!user) {
            console.log('User not present : First create account');
            return res.redirect('/signup');
        }

        // password does not match
        if (user.password != password) {
            console.log('Wrong password entered');
            return res.redirect('back');
        }

        // create session
        // we should use encrypted session, here i'm just using user id
        res.cookie('user_id', user.id);

        console.log('user session created successfully');
        
        return res.redirect('/');

    } catch (err) {
        // invalidate user
        console.log('Error finding user in database');
        res.redirect('back');
    }
    
}