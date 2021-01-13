
/** 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            i--
        }

    }
    return nums.length;


};


/**买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let money = 0;
    let buy = prices[0]
    for (let price of prices) {
        if (price > buy) {
            money += price - buy
        }
        buy = price
    }
    return money


};

/** 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums = nums.sort(function (a, b) {
        return a - b;
    })
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false

    //转获为对象的方法
    // let obj = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if (obj[nums[i]]) {
    //         return true
    //     }
    //     obj[nums[i]] = true
    // }
    // return false
};

/**加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


};