import "core-js";

console.log(Promise.resolve);
let p1: Promise<any> = Promise.resolve() // fullfiled
let p2 = p1.then(() => {//1 call
    console.log(0);
    return Promise.resolve(4);// 3 call
    // return 4;
})

// .then(res => res)
let p3 = p2.then((res) => {
    console.log(res);
});
let p4: Promise<any> = Promise.resolve()// fullfiled
let p5 = p4.then(() => {//2 call
    console.log(1);
})
let p6 = p5.then((res) => {
    console.log(2); // 4 call
})
let p7 = p6.then((res) => {
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
