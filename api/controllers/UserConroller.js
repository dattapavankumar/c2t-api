const UsersService = require('../services/UsersService');

module.exports = {

    find: function (req, res) {
        var sortBy = null;
        if (req.params.sortBy) {
            sortBy = req.params.sortBy;
        };
        UsersService.find(req, sortBy, function (err, result) {
            if (err) {
                res.send(err);
                return;
            };
            res.send(result);
        });
    },

    findOne: function (req, res) {
        UsersService.findOne(req, function (err, result) {
            if (err) {
                res.send(err);
                return;
            };
            res.send(result);
        });
    },

    update: function (req, res) {
        var obj = req.body;
        UsersService.update(req, obj, function (err, result) {
            if (err) {
                res.send(err);
                return;
            }
            res.send(result);
        });
    },

    delete: function (req, res) {
        var obj = req.body;
        UsersService.delete(req, obj, function (err, result) {
            if (err) {
                res.send(err);
                return;
            }
            res.send(result);
        });
    }

}