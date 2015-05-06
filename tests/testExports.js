var dh = require("../deepHas"),
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