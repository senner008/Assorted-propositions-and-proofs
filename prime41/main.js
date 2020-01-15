
// Proposition prime41:
// predicate : n^2 + n + 41
// for all n in N(natural numbers), predicate is a prime number

const test = require("../test.js");

function prime41(n) {
    return Math.pow(n,2) + n + 41;
}

function isPrime(n) {

    if (n === 2) return true;
    if (n <= 1) return false;

        for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i++) {
        
            if (n % i === 0) {
                return false
            }
        }

    return true;
}

test(isPrime, prime41, 1000); // not true for: 40