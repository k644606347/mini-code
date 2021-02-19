const obj1: any = {a: 1};
const s1 = Symbol();

Object.defineProperty(obj1, s1, {
    enumerable: false,
    value: 's1'
});

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
