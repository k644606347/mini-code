import "core-js";

console.log(Promise.resolve);
Promise.resolve() // fullfiled
    .then(() => {//1 call
        console.log(0);
        return Promise.resolve(4);// 3 call
        // return 4;
    })
    // .then(res => res)
    .then((res) => {
        console.log(res);
    });
Promise.resolve()// fullfiled
    .then(() => {//2 call
        console.log(1);
    })
    .then((res) => {
        console.log(2); // 4 call
    })
    .then((res) => {
        console.log(3);
    })
    .then((res) => {
        console.log(5);
    })
    .then((res) => {
        console.log(6);
    })
    .then((res) => {
        console.log(7);
    });
