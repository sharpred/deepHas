var dh = require("./deepHas"),
    should = require("should");

/*
 * Test of exports
 * public functions should be visible (hasProperty and getProperty)
 * private function should be hidden(deepProperty)
 */
dh.should.be.an.instanceOf(Object).and.have.property('hasProperty');
dh.should.have.property('getProperty');
dh.should.be.an.instanceOf(Object).and.not.have.property('deepProperty');
dh.hasProperty.should.be.an.instanceOf(Function);
dh.getProperty.should.be.an.instanceOf(Function);

/*
 * Test hasProperty
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
    hasObj;

hasObj = {
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
test1 = dh.hasProperty(hasObj, "top");
test2 = dh.hasProperty(hasObj, "top.middle");
test3 = dh.hasProperty(hasObj, "top.middle.bottom");
test4 = dh.hasProperty(hasObj, "bottom");
test5 = dh.hasProperty(hasObj, "bottom.middle");
test6 = dh.hasProperty(hasObj, "bottom.middle.top");
test7 = dh.hasProperty();
test8 = dh.hasProperty(hasObj);
test9 = dh.hasProperty("top");
test10 = dh.hasProperty({}, "top");
test11 = dh.hasProperty(hasObj, "truthy");
test12 = dh.hasProperty(hasObj, "falsey");

//assertions
test1.should.be.exactly(true);
test2.should.be.exactly(true);
test3.should.be.exactly(true);
test4.should.be.exactly(false);
test5.should.be.exactly(false);
test6.should.be.exactly(false);
should.not.exist(test7);
should.not.exist(test8);
should.not.exist(test9);
test10.should.be.exactly(false);
test11.should.be.exactly(true);
test12.should.be.exactly(true);

