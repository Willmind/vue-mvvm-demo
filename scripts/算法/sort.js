/**最大数
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums = nums.sort((a, b) => {
        let s1 = `${a}${b}`;
        let s2 = `${b}${a}`;
        return s2 - s1
    })
    return nums[0] ? nums.join('') : '0';
};

/**摆动排序 II
 * copy副本，先排序，然后对前半段逆序，对后半段逆序
 然后前后两段数据，交叉写回原数组
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    nums = nums.sort((a, b) => {
        return a - b;
    })

    let front=nums.slice()




};