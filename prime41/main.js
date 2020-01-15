
// Proposition prime41:
// predicate : n^2 + n + 41
// for all n in N(natural numbers), predicate is a prime number

const forAll = require("../test.js");
const isPrime = require("../_helpers/helpers.js").isPrime;
const sequence = require("../_helpers/helpers.js").sequence;

function nSquaredPlusNPlus41(n) {
    return Math.pow(n,2) + n + 41;
}

console.log(
    forAll(sequence(0, 39))
        .map(nSquaredPlusNPlus41)
        .test(isPrime)
)

console.log(
    forAll(sequence(0, 40))
        .map(nSquaredPlusNPlus41)
        .test(isPrime)
)