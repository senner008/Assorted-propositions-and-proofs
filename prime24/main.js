// Proposition :
// Predicate : n^2 - 1
// For all n in Primes, predicate is a multiple of 24

const forAll = require("../test.js");
const helpers = require("../_helpers/helpers.js");

// Proof :
// All primes+1 and primes-1 are multiple of 2;
// All primes+1 * primes-1 are multiple of 4;'

function aboveBelowAreMultipleOf2(n) {
    return (n - 1) % 2 === 0 && (n + 1) % 2 === 0;
}

function aboveBelowMultipliedAreMultipleOf4(n) {
    return ((n - 1) * (n + 1)) % 4 === 0;
}

console.log(
    forAll(helpers.sequence(4,1000, helpers.isPrime))
        .test(aboveBelowAreMultipleOf2, aboveBelowMultipliedAreMultipleOf4)
);
