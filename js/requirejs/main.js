require(["dep_A", "dep_B", "dep_C"], function(A, B, C) {

    (function(second) {
        var start = +new Date();
        while (start + second * 1000 > +new Date()) {}
    })(window.EXE_TIME);
});