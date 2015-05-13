var dh = require("../deepHas"),
    should = require("should");

/*
 * Test get
 */
var test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
    test9,
    test10,
    test11,
    test12,
    test13,
    obj;

obj = {};
//data

test1 = dh.set(obj, "top", {});
test2 = dh.set(obj, "top.middle", "bottom");
test3 = dh.set(obj, "top.middle.bottom", "new");
test4 = dh.get(obj, "top.middle.bottom");
test5 = dh.set(obj, "bottom", "middle");
test6 = dh.set(obj, "bottom.middle", "top");
test7 = dh.set(obj, "bottom.middle.top", "new");
test8 = dh.set();
test9 = dh.set(obj);
test10 = dh.set("top");
test11 = dh.set({}, "top");
test12 = dh.set(obj, "truthy", true);
test13 = dh.set(obj, "falsey", false);
/*

 //assertions

 test1.should.be.exactly(true);
 test2.should.be.exactly(true);
 /*
 test3.should.be.exactly(true);
 test4.should.be.exactly("new");
 test5.should.be.exactly(true);
 test6.should.be.exactly(true);
 test7.should.be.exactly(false);
 test8.should.be.exactly(false);
 test9.should.be.exactly(false);
 test10.should.be.exactly(true);
 test11.should.be.exactly(true);
 test12.should.be.exactly(true);
 */
