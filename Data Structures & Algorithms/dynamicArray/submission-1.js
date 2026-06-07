class DynamicArray {
    obj;
    capacity;
    size;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.obj = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.obj[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.obj[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.obj[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const val = this.obj[this.size - 1];
        this.size--;
        return val;
    }

    /**
     * @returns {void}
     */
    resize() {
        let start = this.capacity;
        this.capacity *= 2;
        this.obj.fill(undefined, start)
        // let newArr = new Array(this.capacity);
        // for (let i = 0; i < this.size; i++) {
        //     newArr[i] = this.obj[i];
        // }
        // this.obj = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}