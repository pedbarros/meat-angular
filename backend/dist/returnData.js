"use strict";
var express = require("express");
module.exports = (function () {
    var router = express.Router();
    router.get('/admin', function (req, res) {
        res.json({ success: true });
    });
    return router;
})();
