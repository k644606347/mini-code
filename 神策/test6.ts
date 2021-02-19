class Scheduler {
    #limit = 0;
    #tasks: Function[] = [];
    #working: Function[] = [];
    constructor(limit: number) {
        this.#limit = limit;
    }

    addTask(task: string, delay: number) {
        const taskFn = () => {
            return new Promise<boolean>((resolve, reject) => {
                setTimeout(() => {
                    console.log(task);
                    this.cleanTask(taskFn);
                    this.pushWorkingIfNeeded();
                    resolve(true);
                }, delay);
            });
        };

        this.#tasks.push(taskFn);

        this.pushWorkingIfNeeded();
    }

    start() {
        while (this.#tasks.length < this.#limit) {
            this.runTask();
        }
    }
    pushWorkingIfNeeded() {
        while (this.#working.length < this.#limit) {
            this.runTask();
        }
    }
    runTask() {
        const taskFn = this.#tasks.shift();
            
        if (taskFn) {
            this.#working.push(taskFn);
            taskFn();
        }
    }
    
    cleanTask(taskFn: Function) {
        const index = this.#working.indexOf(taskFn);

        if (index !== -1) {
            this.#working.splice(index, 1);
        }
    }
}