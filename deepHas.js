function reduceObject(obj, str) {
    return function(func) {
        "use strict";
        if ( typeof str !== "string") {
            return;
        }
        if ( typeof obj !== "object") {
            return;
        }
        return str.split('.').reduce(func, obj);
    };
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

function update(obj, i) {
    try {
        if (obj.hasOwnProperty(i)) {
            return obj[i];
        } else {
            obj[i] = {};
        }
        return i;
    } catch(ex) {
        return;
    }
}

function has(target, path) {
    var func = reduceObject(target, path),
        deep = func(index);
    if ( typeof deep !== "undefined") {
        return true;
    }
    return false;
}

function get(target, path) {
    var func = reduceObject(target, path),
        deep = func(index);
    return deep;
}

function set(target, path, value) {
    var func,
        deep;
    if (target && path) {
        func = reduceObject(target, path);
        deep = func(update);
        console.log(JSON.stringify(target));
        if (deep) {
            return true;
        }
        return false;
    }
    return false;
}

exports.has = has;
exports.get = get;
exports.set = set;
