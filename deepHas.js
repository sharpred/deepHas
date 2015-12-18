var index,
    reduce,
    add,
    has,
    get,
    set;

function index(obj, i) {
    try {
        if (obj && obj.hasOwnProperty(i)) {
            return obj[i];
        }
        return;
    } catch(ex) {
        console.error(ex);
        return;
    }
}

function indexSet(obj, i) {
    try {
        if (obj && obj.hasOwnProperty(i)) {
            return obj[i];
        } else {
            obj[i] = {};
            return obj[i];
        }
        return;
    } catch(ex) {
        console.error(ex);
        return;
    }
}

function reduce(obj, str) {
    "use strict";
    if ( typeof str !== "string") {
        return;
    }
    if ( typeof obj !== "object") {
        return;
    }
    return str.split('.').reduce(index, obj);
}

function add(obj, str, val) {
    var items = str.split('.');
    var initial = items.slice(0, items.length - 1);
    var last = items.slice(items.length - 1);
    var test = initial.reduce(indexSet, obj);
    test[last] = val;
}

function has(target, path) {
    var test = reduce(target, path);
    if ( typeof test !== "undefined") {
        return true;
    }
    return false;
}

function get(target, path) {
    return reduce(target, path);
}

function set(target, path, val) {
    return add(target, path, val);
}

exports.has = has;
exports.get = get;
exports.set = set;
