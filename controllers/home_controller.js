const Property = require('../models/property');
const User = require('../models/user');

module.exports.home = async function (req, res) {

    try {
        // get posts from db
        const properties = await Property.find({})
            .sort('-createdAt')
            .populate('user');

        // get users from db
        const users = await User.find({});

        return res.render('home', {
            title: 'home',
            users: users,
            properties: properties
        });

    } catch (err) {
        console.log(`Error: ${err}`);
    }
    return res.render('home', {
        title: 'home',
        users: [],
        properties: []
    });
}