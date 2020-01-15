
// Proposition prime41:
// predicate : n^2 + n + 41
// for all n in N(natural numbers), predicate is a prime number

const forAll = require("../test.js");
const helpers = require("../_helpers/helpers.js");

function prime41(n) {
    return helpers.isPrime(Math.pow(n,2) + n + 41);
}

console.log(
    forAll(helpers.sequence(0,40))
    .test(prime41)
)