
// Proposition prime41:
// predicate : n^2 + n + 41
// for all n in N(natural numbers), predicate is a prime number

const forAll = require("../test.js");
const helpers = require("../_helpers/helpers.js");

function nSquaredPlusNPlus41(n) {
    return Math.pow(n,2) + n + 41;
}

console.log(
    forAll(helpers.sequence(0, 39))
        .map(nSquaredPlusNPlus41)
        .test(helpers.isPrime)
)

console.log(
    forAll(helpers.sequence(0, 40))
        .map(nSquaredPlusNPlus41)
        .test(helpers.isPrime)
)