
function isPrime(n) {

    if (n === 2) return true;
    if (n <= 1) return false;

        for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        
            if (n % i === 0) {
                return false
            }
        }
    
    return true;
}

function sequence(start, finish, filter) {
    var arr = [];
    for (let i = start; i < finish +1; i++) {
        if (filter && filter(i)) {
           arr.push(i)
        } else if (!filter) {
            arr.push(i);
        }
    }
    return arr;
}


module.exports = {
    isPrime,
    sequence
}