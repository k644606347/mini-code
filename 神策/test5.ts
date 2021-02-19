/**
 * 去抖
 * @param processor 
 * @param delay 
 */
function fn1(processor: Function, delay: number) {
    let timer: number | undefined;

    function registerTimer(args: any[]) {
        timer = window.setTimeout(() => {
            processor(args);
        }, delay);
    }
    return (...args: any[]) => {
        window.clearTimeout(timer);
        registerTimer(args);
    }
}