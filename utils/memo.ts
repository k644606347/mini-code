export function memorize<Fn extends (...args: any[]) => any>(fn: Fn) {
    const memoized = Object.assign(
        function (...args: Parameters<Fn>) {
            const cacheKey = args[0] + '';
            const cacheResult = memoized._cache[cacheKey];
            if (cacheResult !== undefined) return cacheResult;
            
            const result = fn();

            memoized._cache[cacheKey] = result;

            return result;
        }, 
        {
            _cache: {} as Record<string, any>
        });
    
    return memoized;
};