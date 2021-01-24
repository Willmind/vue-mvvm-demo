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

    //通过 lastIndexOf() 方法找到元素在当前数组中最后一次出现的索引，
    // 如果和 indexOf() 方法获取到的索引相同的话，说明该元素在数组中不存在重复元素，
    // 也就是我们所要找的元素
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

/** 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let a = s.split('');
    let b = s.split('');
    if (a.sort().toString() === b.sort().toString()) {
        return true
    } else {
        return false
    }

};

/** 验证回文串 双指针
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 0) return true;
    s = s.replace(/^[0-9a-zA-Z]/g, '').toLowerCase()
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return false
        }
        start++;
        end--;
    }
    return true;
};


/**最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let first = strs[0];
    let result = '';
    if (!strs.length) {
        return result;
    }

    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (first[i] !== strs[j][i]) {
                return result
            }
        }
        result += first[i]

    }
    return result
};

/**位1的个数
 * 利用位操作技巧，每次把二进制数的最后一位1转化为0，每转化一次，num加1，
 * 直到没有1可以转化的时候，此时二进制数为0，
 * 转换的技巧利用位运算的与操作，
 * 将n与(n-1)相与，因为0与任何数相与都为0，所以，n每减1，相当于将二进制中的一个1变为了0。
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var num = 0
    while (n !== 0) { //判断不为1的时候
        num += 1
        n &= (n - 1) //将n与(n-1)相与，相当于1的个数减1
    }
    return num
};

/** 汉明距离
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var xb = x.toString(2),
        yb = y.toString(2);
    var xl = xb.length,
        yl = yb.length;
    var count = 0; // 记录不一样的个数

    // 将短的字符串用 0 补齐
    if (xl > yl) {
        yb = Array(xl - yl + 1).join('0') + yb;
    } else {
        xb = Array(yl - xl + 1).join('0') + xb;
    }

    for (var i in xb) {
        if (xb[i] !== yb[i]) {
            count ++;
        }
    }
    return count;
};


