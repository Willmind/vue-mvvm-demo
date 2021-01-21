/**
 *
 * 两数之和
 *
 * @param nums 数组
 * @param target 目标数值
 * @returns {number[]}
 */

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j]
            }

        }
    }
}

/**
 * 无重复字符的最长子串
 * 滑动窗口法
 * @param data
 */

function lengthOfLongestSubstring(data) {
    let arr = [];
    let max = 0;
    for (let i = 0; i < data.length; i++) {
        let index = arr.indexOf(data[i])

        //判断是否存在该项
        if (index !== -1) {

            //删除arr前面的项
            arr.splice(0, index + 1)
        }
        //继续添加字符 进去arr
        arr.push(data.charAt(i))
        max = Math.max(arr.length, max)


    }
    return max
}

/**只出现一次的数字
 *
 * @param {number[]} nums
 * @return {number}
 */


var singleNumber = function (nums) {

    nums.sort(function (a, b) {
        return a - b
    })//排序数组
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] !== nums[i + 1]) { //找到不相等的一组，直接返回
            return nums[i]
        }
    }
    return nums[nums.length - 1]  // 如果没有找到不相等的一组数据，直接返回数组的最后一个数字


};

/**旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    for (let i = 0; i < k; i++) {
        let len = nums.length
        let a = nums[len - 1]
        nums.pop(nums[len - 1])
        nums.unshift(a)
    }
    return nums;
};

/** 两个数组的交集 II

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let newArr = [];
    let i = j = 0;

    //判断数组都为空
    if (len1 === 0 || len2 === 0) {
        return newArr;
    }

    nums1.sort(function (a, b) {
        return a - b;

    })
    nums2.sort(function (a, b) {
        return a - b;
    })

    while (i < len1 || j < len2) {
        if (nums1[i] > nums2[j]) {
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            if (nums1[i] === nums2[j]) {
                newArr.push(nums1[i]);
            }
            if (i < len1 - 1) {
                i++;
            } else {
                break;
            }
            if (j < len2 - 1) {
                j++;
            } else {
                break;
            }
        }
    }
    return newArr
};




