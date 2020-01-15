function forAll (sequence) {

    return {
        test: function (arrOfPredicates) {
            return sequence.every(n => {
                if (!Array.isArray(arrOfPredicates)) arrOfPredicates = [arrOfPredicates];          
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
