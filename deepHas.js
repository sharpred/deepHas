function deepProperty(obj, str) {
    "use strict";
    function index(obj, i) {
        "use strict";
        try {
            return obj[i];
        } catch(ex) {
            return;
        }
    }

    return str.split('.').reduce(index, obj);
}

function hasProperty(target, path) {
    "use strict";
    if ( typeof path !== "string") {
        return;
    }
    if ( typeof target !== "object") {
        return;
    }
    if (deepProperty(target, path)) {
        return true;
    }
    return false;
}

function getProperty(target, path) {
    "use strict";
    var test = deepProperty(target, path);
    return test;
}

exports.hasProperty = hasProperty;
exports.getProperty = getProperty;
