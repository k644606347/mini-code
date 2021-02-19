var LIMIT = 10000000;
var arr = new Array(LIMIT),
    arr2 = new Array(LIMIT),
    ob1 = {a: 22};
arr2.push(ob1);

setArrVal(arr);
setArrVal(arr2);
function setArrVal(arr) {
    console.time("Array insertion time");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = ob1;
    }
    console.timeEnd("Array insertion time");
}


{
    geo: {
        city:[
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
            }
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
                parentCode: 'CN0086',
                code: "420000",
                name: "湖北",
                rate: 0,
            },
        ],
        county: [
            {
                parentCode: '110000',
                code: "110108",
                name: "海淀区",
                rate: 1,
            }
        ],
    }
}