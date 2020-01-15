function forAll (sequence) {

    return {
        test: function (...arrOfPredicates) {
            return sequence.every(n => {          
                return arrOfPredicates.every(predicate => {
                    return predicate(n);
                });
            });
        },
        ifAs : function (func) {
            // TODO: make immutable
            sequence = sequence.map(func);
            return this;
        }
    }
}

module.exports = forAll;
