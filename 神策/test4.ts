// 如下，实现 `calc` 方法，可以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数。
/**
 * @param {number} n 乘积
 * @return {Array} 拆解后的乘数
 */
function calc(n: number) {
    const results: number[] = [];

    function process(n: number) {
        console.log('n', n);
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                results.push(i);

                if (n / i === 1)
                    return;
                
                process(n / i);
                break;
            }
        }
    }

    process(n);

    return results;
}

console.log(calc(2));

// [2]
console.log(calc(8));

// [2, 2, 2]
console.log(calc(24));

// [2, 2, 2, 3]
console.log(calc(30));

// [2, 3, 5]