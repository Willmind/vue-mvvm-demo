/**反转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const n = s.length;
    for (let l = 0, r = n - 1; l < r; l++, r--) {//双指针
        [s[l], s[r]] = [s[r], s[l]];//结构赋值
    }

};


/**字符串中的第一个唯一字符
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let obj = {}, key;

    //循环遍历每个字符的次数
    for (let i in s) {
        key = s[i]// 每个字符
        if (obj[key] >= 1) {
            obj[key] += 1
        } else {
            obj[key] = 1
        }
    }

    for (let i in s) {
        if (obj[s[i]] === 1) {
            return parseInt(i);
        }
    }
    return -1

    //通过 lastIndexOf() 方法找到元素在当前数组中最后一次出现的索引，如果和 indexOf() 方法获取到的索引相同的话，说明该元素在数组中不存在重复元素，也就是我们所要找的元素
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
            return i;
        }
    }
};

/**字符串转换整数 (atoi)
 *
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    let str = '';
    for (let i = 0; i < s.length; i++) {
        //判断首字符是否为加减号
        if ((s.charAt(i) === '-' || s.charAt(i) === '+') && i === 0) {
            str = str.concat(s.charAt(i))
        } else if (/^\d+$/.test(s.charAt(i))) {
            str = str.concat(s.charAt(i))
        } else {
            break;
        }

    }
    //str-0 字符串化为数组最简单也是最常用的方法
    if (str - 0 > 2147483647) {
        return 2147483647
    } else if (str - 0 < -2147483648) {
        return -2147483648
    }
    if (isNaN(str - 0)) return 0//"+"/"-"这种情况,返回0
    return str - 0

};


/**实现 strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    //判断参数是否正确
    if (!needle || needle.length < 1) {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    let str = '';
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            str = haystack.substr(i, needle.length);
            if (str === needle) {
                return i;
            }
        }

    }
    return -1;


};
