# deepHas

test for existence of nested object key and optionally return that key

##Installation
`npm install deephas`

or just drop deepHas.js into your project.

##Testing
`npm test` or `./runTests.sh`

##Usage

`dh = require("deepHas");`

`var obj = {"some": {"nested": {"property":""your value here"}}};`

### dh.has(obj, 'some.nested.property')

Returns true or false if 'some.nested.property' exists or not. In the above example returns true.

### dh.get(obj, 'some.nested.property') 

Returns the value or undefined if it does not exist.  In the above example returns "your value here"

### dh.set(obj, 'some.new.property') 

Returns true if already set or if set successfully.  Returns false on error. In the above example returns true.