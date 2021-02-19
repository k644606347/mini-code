/**
 * 
 * @param s 
 */
function firstUniqChar(s: string) {
    let arr1 = s.split(''),
        countMap: {[k in string]: number} = {};

    arr1.forEach(char => {
        const count = countMap[char];

        countMap[char] = count === undefined ? 1 : count + 1;
    });

    return arr1.find(char => countMap[char] === 1) || -1;
};

console.log(firstUniqChar('123'));