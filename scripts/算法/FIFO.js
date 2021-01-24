/**
 * 设计循环队列
 *
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
 Front: 从队首获取元素。如果队列为空，返回 -1 。
 Rear: 获取队尾元素。如果队列为空，返回 -1 。
 enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
 deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
 isEmpty(): 检查循环队列是否为空。
 isFull(): 检查循环队列是否已满。

 *
 * @param {number} k
 * 使用双指针记录队列元素位置，双指针初始化为-1，删除元素时验证指针是否重合，是则初始化队列
 */
var MyCircularQueue = function (k) {
    this.queue = [];
    this.size = k;
    this.count = 0;


};

/**Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (!this.isFull()) {
        this.queue.push(value)
        this.count++
        return true
    }
    return false;

};

/**Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (!this.isEmpty()) {
        this.queue.shift();
        this.count--;
        return true;

    }
    return false;
};

/**Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (!this.isEmpty()) {
        return this.queue[0];
    }
    return -1

};

/**Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (!this.isEmpty()) {
        return this.queue[this.queue.length - 1];
    } else {
        return -1
    }


};

/** Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    if (this.count === 0) {
        return true;
    }

    return false;

};

/**Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    if (this.count === this.size) {
        return true;
    } else {
        return false;
    }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */