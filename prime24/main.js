// Proposition :
// Predicate : n^2 - 1
// For all n in Primes, predicate is a multiple of 24

const forAll = require("../test.js");
const isPrime = require("../_helpers/helpers.js").isPrime;
const sequence = require("../_helpers/helpers.js").sequence;

// Proof :
// p^2 - 1 = (p-1)*(p+1)
// All primes+1 and primes-1 are multiple of 2;
// All primes+1 * primes-1 are multiple of 8;
// All primes+1 * primes-1 are multiple of 3;
// All primes+1 * primes-1 are multiple of 3 * 8;

function aboveBelowAreMultipleOf_2(n) {
    return (n - 1) % 2 === 0 && (n + 1) % 2 === 0;
}

function aboveBelowMultipliedAreMultipleOf_8(n) {
    return ((n - 1) * (n + 1)) % 8 === 0;
}

function aboveBelowMultipliedAreMultipleOf_3(n) {
    return ((n - 1) * (n + 1)) % 3 === 0;
}

function aboveBelowMultipliedAreMultipleOf_3Times8(n) {
    return ((n - 1) * (n + 1)) % 3*8 === 0;
}

function predicate(n) {
    return (Math.pow(n,2) -1) % 24 === 0;
}

console.log(
    forAll(sequence(4,10000))
        .filter(isPrime)
        .test([
            aboveBelowAreMultipleOf_2, 
            aboveBelowMultipliedAreMultipleOf_8, 
            aboveBelowMultipliedAreMultipleOf_3, 
            aboveBelowMultipliedAreMultipleOf_3Times8,
            predicate
        ])
);
