
var MyQueue = function() {
    this.stack = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // Write your code here.
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Write your code here.
    let len = this.stack.length;
    let res = this.stack[0];
    for(let i = 0; i < len - 1; i++){
        this.stack[i] = this.stack[i + 1];
    }
    this.stack.pop();
    return res;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // Write your code here.
    return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // Write your code here.
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */