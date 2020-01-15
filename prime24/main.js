// Proposition :
// Predicate : n^2 - 1
// For all n in Primes, predicate is a multiple of 24

const forAll = require("../test.js");
const helpers = require("../_helpers/helpers.js");


function getPrimes (numbers) {

    var arr = [];
    numbers.forEach(n => {
        if (helpers.isPrime(n)) arr.push(n)
    })
    return arr;
}

var primes = getPrimes(helpers.getNaturalNumbers(4,1000));
console.log(primes)

// Proof :

// All primes+1 and primes-1 are multiple of 2;

function aboveBelowPrimes(prime) {

    return (prime - 1) % 2 === 0 && (prime + 1) % 2 === 0;
}

var result = forAll(primes)
    .test(aboveBelowPrimes);