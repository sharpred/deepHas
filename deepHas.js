function deep(obj, str) {
    "use strict";
    if ( typeof str !== "string") {
        return;
    }
    if ( typeof obj !== "object") {
        return;
    }
    function index(obj, i) {
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

function has(target, path) {
    var test = deep(target, path);
    if ( typeof test !== "undefined") {
        return true;
    }
    return false;
}

function get(target, path) {
    return deep(target, path);
}

exports.has = has;
exports.get = get;
