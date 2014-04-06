require(["dep_A", "dep_B", "dep_C"],
    function(A, B, C) {
        A.foo();
        B.foo();
        C.foo();
    });