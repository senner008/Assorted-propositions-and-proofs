function forAll (sequence) {

    return {
        test: function (...arrOfPredicates) {
            return sequence.every(n => {          
                return arrOfPredicates.every(predicate => {
                    return predicate(n);
                });
            });
        },
        map : function (func) {
            // TODO: make immutable
            sequence = sequence.map(func);
            return this;
        },
        filter : function (func) {
            sequence = sequence.filter(func);
            return this;
        }
    }
}

module.exports = forAll;
