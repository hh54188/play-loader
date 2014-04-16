define(function(require, exports, module) {

    var mod_A = require("dep_A");
    var mod_B = require("dep_B");
    // var mod_C = require("dep_C");
    document.body.onclick = function() {
        var mod_C = require("dep_C");
    }

    module.exports = function() {

    }
});