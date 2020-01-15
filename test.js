function forAll (sequence) {

    return {
        test: function (...arrOfPredicates) {
            return sequence.every(n => {          
                return arrOfPredicates.every(predicate => {
                    return predicate(n);
                });
            });
        }
    }
}

module.exports = forAll;
