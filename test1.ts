// 1.  给定数组 ['1a','2b','13c','5a'] ，输出出现次数最多的字母前数字之和 (输出6)

//   2.  Promise All 实现


function sum(arr: string[]) {
    const map1: {[k in string]: { sum: number; count: number}} = {};

    let maxCount = 0,
        maxCountLetter = '';

    arr.forEach(item => {        
        const letter = item.substr(item.length - 1),
                num = item.replace(letter, '');

        // console.log(letter, num);

        let letterConfig = map1[letter];

        if (!letterConfig)
            map1[letter] = letterConfig = {
                count: 1,
                sum: Number(num)
            };
        else {
            letterConfig.sum += Number(num);
            letterConfig.count +=1;
        }

        if (letterConfig.count > maxCount) {
            maxCount = letterConfig.count;
            maxCountLetter = letter;
        }
    });

    return map1[maxCountLetter] ? map1[maxCountLetter].sum : 0;
}

console.log(sum(['1a','2b','13c','5a', '1b', '2b']));

// console.log('1a'.split(/[a-z]/));
// console.log('12a'.match(/\d+/));
// console.log('a'.match(/\d+/));

// console.log('12a'.substr(-1))