const { log } = console
export const withLog = <F extends (...args: any) => any, R = ReturnType<F>>(fn: F) => {
    return function (...args: Parameters<F>) {
        log('params', ...args as any)
        const result: R = fn(...args as any)
        log('return', result)
        return result;
    }
}