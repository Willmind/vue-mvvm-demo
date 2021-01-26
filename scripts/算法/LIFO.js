/**在常数时间获取当前最小的元素，方法就是在每个元素中保存一个当时的最小值
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []

};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    let top = this.stack[this.stack.length - 1]
    if (!top) {
        this.stack.push({
            value: x,
            min: x
        })
    } else {
        this.stack.push({
            value: x,
            min: Math.min(x, top.min)//在常数时间获取当前最小的元素，方法就是在每个元素中保存一个当时的最小值
        })
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1].value

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1].min;
};

/** 有效的括号
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var isValid = function (s) {
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        // { ( [
        if (map[s[i]]) {
            stack.push(s[i])
        } else if (s[i] !== map[stack.pop()]) {
            //若 stack 栈顶出栈括号 stack.pop() 与当前遍历括号 c 不对应，则提前返回 false。
            return false
        }
    }
    return stack.length === 0;
};

/**每日温度解法一
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let arr = [];
    for (let i = 0; i < T.length; i++) {
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                arr[i] = j - i
                break
            } else {
                arr[i] = 0
                continue
            }
        }
    }
    arr.push(0)
    return arr;

};

/**每日温度解法二
 * @param {number[]} T
 * @return {number[]}
 *
 * 首先i位的值，为j-i的差值。j为下一位比i处大的最小下标。
 建立一个index栈，先入栈下标0，遍历T，判断T[i]和T[index[index.length-1]] (栈顶元素对应的T内值)。
 若T[i] > T[index[index.length-1]] 将栈顶排出indexTop = index.pop(); 赋值T[indexTop] = i - indexTop 。
 循环此步骤直到栈顶对应的T值大于T[i]。
 最后将i置入栈内。
 遍历完数组，最后将栈排空，栈内剩余值都为0。（我们也可以初始化结果数组为0）
 */
var dailyTemperatures2 = function (T) {
    let res = new Array(T.length).fill(0);
    let index = [0];
    for (let i = 1; i < T.length; i++) {
        while (T[i] > T[index[index.length - 1]]) {
            let indexTop = index.pop();
            res[indexTop] = i - indexTop;
        }
        index.push(i);
    }
    return res;

};


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // 声明栈
    let stack = [];
    for(let item of tokens){
        switch(item){
            case '+':
                let a1 = stack.pop();
                let b1 = stack.pop();
                stack.push(b1 + a1);
                break;
            case '-':
                let a2 = stack.pop();
                let b2 = stack.pop();
                stack.push(b2 - a2);
                break;
            case '*':
                let a3 = stack.pop();
                let b3 = stack.pop();
                stack.push(b3 * a3);
                break;
            case '/':
                let a4 = stack.pop();
                let b4 = stack.pop();
                stack.push(parseInt(b4 / a4));
                break;
            default:
                stack.push(parseInt(item));
        }
        console.log(stack);
    }
    return parseInt(stack.pop());
};
