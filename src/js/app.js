class Team {
    constructor(arr) {
        this.arrayPerson = arr;
    }

    getIndex(inx) {
        return this.arrayPerson[inx];
    }

    [Symbol.iterator]() {
        let current = 0;
        let last = this.arrayPerson.length;

        return {
            next() {
                if(current < last) {
                    return {
                        done: false,
                        value: current++
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}