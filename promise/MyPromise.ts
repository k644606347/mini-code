// type ResolveFn<T> = (value: T | PromiseLike<T>) => void;

type ResolveFn<T> = (value: T) => void;
type RejectFn<T> = (reason?: any) => void;
class MyPromise<T> {
    #state: 'fulfilled' | 'rejected' | 'pending' = 'pending';
    #value!: T;
    #reason: any;
    constructor(executor: (resolve: ResolveFn<T>, reject: RejectFn<T>) => void) {
        const resolveFn: ResolveFn<T> = (val) => {
            if (this.#state !== 'pending') return;
            this.#value = val;
            this.#state = 'fulfilled';

            registerTasks();
        }

        const rejectFn: RejectFn<T> = (reason) => {
            if (this.#state !== 'pending') return;
            this.#reason = reason;
            this.#state = 'rejected';

            registerTasks();
        }

        const registerTasks = () => {
            setTimeout(() => {
                // console.log(this.#state);
                if (this.#state === 'fulfilled') {
                    this.#eventEmitter.emit('fulfilled');
                } else {
                    this.#eventEmitter.emit('rejected');
                }
            }, 0);
        }

        executor(resolveFn, rejectFn);
    }

    #eventEmitter = new EventEmitter<'fulfilled' | 'rejected'>();

    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null) {
        return new MyPromise((resolve, reject) => {
            const onResolve = () => {
                if (!onfulfilled) {
                    resolve(this.#value);
                    return;
                }

                let result;
                try {
                    result = onfulfilled(this.#value);
                } catch (err) {
                    reject(err);
                }

                resolve(result);
            }

            const onReject = () => {
                if (!onrejected) {
                    reject(this.#reason);
                    return;
                }

                let result;
                try {
                    result = onrejected(this.#reason);
                } catch (err) {
                    reject(err);
                }

                resolve(result);
            }

            this.#eventEmitter.on('fulfilled', onResolve);
            this.#eventEmitter.on('rejected', onReject);
        });
    }
}

class EventEmitter<AllowedEvent extends string = string> {
    #listeners: { [k in AllowedEvent]: {
        fn: Function;
        once: boolean;
    }[]
    } = {} as any;
    on(name: AllowedEvent, fn: Function) {
        let eventData = this.#listeners[name];

        if (!eventData) {
            this.#listeners[name] = eventData = [];
        }

        eventData.push({
            fn,
            once: false
        });
    }
    emit(name: AllowedEvent) {
        const eventData = this.#listeners[name];

        if (!eventData) return;

        eventData && eventData.forEach(data => {
            data.fn && data.fn({
                type: name,
            });
        });
    }
}



const myPromise1 = new MyPromise<number>((resolve, reject) => {
    resolve(123);
});

myPromise1.then(val => {
    console.log('then1', val);
    return val;
}).then(val => {
    console.log('promise2.then1', val);
});

myPromise1.then(val => {
    console.log('then2', val);
});
myPromise1.then(val => {
    console.log('then3', val);
});