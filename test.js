function calcCaseCount(level) {
    function _recursive(level) {
        if (level <= 2) {
            return level;
        }

        return _recursive(level - 1) + _recursive(level - 2);
    }

    return _recursive(level);
}

function calcCaseCount2(level) {
    
}


console.log(calcCaseCount(1));
console.log(calcCaseCount(2));
console.log(calcCaseCount(3));
console.log(calcCaseCount(4));
console.log(calcCaseCount(5));
console.log(calcCaseCount(6));
console.log(calcCaseCount(7));