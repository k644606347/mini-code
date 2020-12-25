export function bindLog<Fn extends (...args: any[]) => any>(fn: Fn) {
    return (...args: Parameters<Fn>) => {
        console.log(fn(...args));
    }
}

export function bindTimeLog<Fn extends (...args: any[]) => any>(fn: Fn) {
    return (...args: Parameters<Fn>) => {
        console.log('args', args);
        console.time();
        console.log('return', fn(...args));
        console.timeEnd();
    }
}