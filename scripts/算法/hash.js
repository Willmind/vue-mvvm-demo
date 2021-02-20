/**设计哈希集合

 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.arr = new Array();
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.arr.indexOf(key)===-1){
        this.arr.push(key)
    }

};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if(this.arr.indexOf(key)!==-1){
        this.arr.splice(this.arr.indexOf(key),1)
    }

};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.arr.indexOf(key) !== -1;

};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


/** 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    for(let x of nums){
        if(set.has(x)){
            return true
        }
        set.add(x)
    }
    return false

};