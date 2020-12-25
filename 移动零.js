/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0;i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            if (i !== j)
                nums[i] = 0;
            j++;
        }
    }
    // for (;j < nums.length; j++) {
    //     nums[j] = 0;
    // }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function (nums) {
    for (let i = nums.length ; i --;) {
      if (!nums[i]) {
        nums.splice(i, 1);
        nums.push(0);
      }
    }
}

function makeArr1(len) {
    const arr = new Array(len);
    for (let i = 0; i < len; i++) {
        let random = Math.round(Math.random() * 5);

        arr[i] = random;
    }
    return arr;
}
const nums1 = makeArr1(100000);


// 通过混入字符串，生成异构数组
nums1.push('222');

// console.log('nums1', nums1);
// very fast
console.time();
moveZeroes([...nums1]);
console.timeEnd();

// very slow
console.time();
moveZeroes2([...nums1]);
console.timeEnd();



{
    geo: {
        city: [
            {
                code: "420100",
                name: "武汉",
                rate: 1,
            }
        ],
        country: [
            {
                code: "CN0086",
                name: "中国",
                rate: 0,
            },
            {
                code: "CN0086",
                name: "美国",
                rate: 0,
            },
        ],
        province: [
            {
                code: "110000",
                name: "北京",
                rate: 1,
            },
            {
                code: "310000",
                name: "上海",
                rate: 1,
            },
            {
                code: "420000",
                name: "湖北",
                rate: 0,
            },
            {
                code: "420000",
                name: "纽约",
                rate: 0,
            },
        ],
    }
}

manualGeo = {
    china: {
        hubei: {
            wuhan
        },
        beijing,
    },
    american: {
        纽约
    }
}