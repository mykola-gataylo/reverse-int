module.exports = function reverse(n) {
    if (n < 0) {
        n = Math.abs(n);
    }

    return n = +n.toString().split('').reverse().join('');
}
