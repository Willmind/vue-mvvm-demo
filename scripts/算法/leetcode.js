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



