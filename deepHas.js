function deepProperty(obj, str) {
    "use strict";
    if ( typeof str !== "string") {
        return;
    }
    if ( typeof obj !== "object") {
        return;
    }
    function index(obj, i) {
        "use strict";
        try {
            if (obj.hasOwnProperty(i)) {
                return obj[i];
            }
            return;
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
    var test = deepProperty(target, path);
    if ( typeof test !== "undefined") {
        return true;
    }
    return false;
}

function getProperty(target, path) {
    "use strict";
    if ( typeof path !== "string") {
        return;
    }
    if ( typeof target !== "object") {
        return;
    }
    var test = deepProperty(target, path);
    return test;
}

exports.hasProperty = hasProperty;
exports.getProperty = getProperty;
