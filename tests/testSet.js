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
    getObj;

getObj = {
    "top" : {
        "middle" : {
            "bottom" : {
            }
        }
    },
    "truthy" : true,
    "falsey" : false
};
//data
/*
test1 = dh.set(getObj, "top", "middle");
test2 = dh.set(getObj, "top.middle", "bottom");
test3 = dh.set(getObj, "top.middle.bottom", "new");
test4 = dh.get(getObj, "top.middle.bottom.new");
test5 = dh.set(getObj, "bottom");
test6 = dh.set(getObj, "bottom.middle");
test7 = dh.set(getObj, "bottom.middle.top");
test8 = dh.set();
test9 = dh.set(getObj);
test10 = dh.set("top");
test11 = dh.set({}, "top");
test12 = dh.set(getObj, "truthy");
test13 = dh.set(getObj, "falsey");*/


//assertions
/*
test1.should.be.exactly(true);
test2.should.be.exactly(true);
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
