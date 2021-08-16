const User = require('../models/User');

class SitesController {
    //[GET] /home
    index(req, res) {
        try {
            User.find({}, function (err, users) {
                if (!err) res.json(users);
            });
        } catch (error) {}
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
