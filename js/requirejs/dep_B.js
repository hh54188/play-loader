define(function(require, exports, module) {

    (function(second) {
        var start = +new Date();
        while (start + second * 1000 > +new Date()) {}
    })(window.EXE_TIME);

    exports.foo = function() {
        console.log("B");
    }
})