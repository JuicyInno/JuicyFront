function isEmpty(value) {

    if (value instanceof Map && value.length !== 0) {
        return false
    }

    if (value instanceof Set && value.length !== 0) {
        return false
    }

    if (Array.isArray(value) && value.length !== 0 ) {
        return false;
    }

    if (typeof(value) === 'string' && value !== '') {
        return false;
    }

    if (value && Object.keys(value).length !== 0 && Object.getPrototypeOf(value) === Object.prototype) {
        return false;
    }

    return true;
}

console.log(isEmpty(null)); // => true
console.log(isEmpty(true)); // => true
console.log(isEmpty(1)); // => true
console.log(isEmpty([1,2,3])); // => false
console.log(isEmpty({'a':1})); // => false
console.log(isEmpty('123')); // => false
console.log(isEmpty(123)); // => true
console.log(isEmpty('')); // => true
console.log(isEmpty(0)); // => true