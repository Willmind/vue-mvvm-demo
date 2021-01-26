/**二分查找
 /**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) {
        return x
    }
    let left = 0, right = x >> 1
    while (left <= right) {
        let mid = (left + right) >> 1
        if (x < mid * mid) {
            right = mid - 1
        } else if (x > mid * mid) {

        } else {
            return mid
        }

    }
    return right

};

/** 猜数字大小
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return                -1 if num is lower than the guess number
 *                         1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        const res = guess(mid)

        if (res === 0) {
            return mid;
        } else if (res === 1) {
            left = mid + 1
        } else {
            right = mid - 1
        }

    }


};

/**搜索旋转排序数组
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (nums[mid] === target) return mid;

        if (nums[mid] >= nums[start]) {  //前边是有序的
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {        //后边是有序的
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1

};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let low = 0;
    let high = nums.length - 1;
    let mid = null;
    while (low < high) {
        mid = Math.floor((low + high) / 2) //首先从数组 nums中找到中间的元素 mid。
        if (nums[mid] > nums[mid + 1]) {

            //若该元素恰好位于降序序列或者一个局部下降坡度中（通过将 nums[i]与右侧比较判断)，则说明峰值会在本元素的左边。于是，我们将搜索空间缩小为 mid的左边(包括其本身)，并在左侧子数组上重复上述过程。
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return high

};

/**寻找旋转排序数组中的最小值
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 假设数组只有一项，直接返回
    if (nums.length == 1) {
        return nums[0];
    };

    var left = 0,
        right = nums.length - 1;
    // 假设数组最后一项大于第一项，说明数组未旋转，直接返回
    if (nums[right] > nums[0]) {
        return nums[0];
    };

    // 既然能走到这一步，那说明数组一定旋转了，套用之前的规则，使用二分法进行查找
    while (right >= left) {
        // Find the mid element
        var mid = Math.floor((left + right) / 2);
        // 满足如下条件之一说明就是最小元素，直接返回即可
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        };
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        };
        // 比较当前中间元素与第一位
        if (nums[mid] > nums[0]) {
            // 如果要大，那就去右边找
            left = mid + 1;
        } else {
            // 反之就去左边找
            right = mid - 1;
        };
    };
    return -1;
};
