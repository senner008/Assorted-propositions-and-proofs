function test (testFunc, predicate, loopTimes) {
    for (let i = 0; i < loopTimes; i++) {
        if (testFunc(predicate(i)) === false) {
            throw "not true for: " + i;
        }
    }
}

module.exports = test;
