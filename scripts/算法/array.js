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
var plusOne = function (digits) {
    let last = digits.length - 1
    while (last >= 0) {
        if (digits[last] < 9) {

            digits[last] += 1;
            return digits
        } else {
            digits[last] = 0
        }
        last--

    }
    //首位字符为0的情况
    if (digits[0] === 0) {
        digits.unshift(1)

    }
    return digits

};

/**移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let start = 0;
    let end = nums.length - 1
    while (start < end) {
        if (nums[start] === 0) {
            nums.splice(start, 1)
            nums.push(0)
            end--
            continue
        }
        start++;
    }
    return nums

};


/** 有效的数独
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    //判断每一行
    for (let arr of board) {
        let row = [];
        for (let cell of arr) {
            if (cell !== '.') {
                row.push(cell)
            }
        }
        let set = new Set(row) //es6数组去重（值唯一）
        if (set.size !== row.length) {
            return false;

        }
    }

    //判断每一列
    for (let i = 0; i < 9; i++) {
        let col = [];
        board.map(arr => {
            if (arr[i] !== '.') {
                col.push(arr[i])
            }
        })
        let set = new Set(col)
        if (set.size !== col.length) {
            return false;

        }

    }

    //判断每一个九宫格
    for (let x = 0; x < 9; x += 3) { //x轴
        for (let y = 0; y < 9; y += 3) {  //y轴

            //循环每个小的9宫格
            let box = [];
            for (let i = x; i < x + 3; i++) {
                for (let j = y; j < y + 3; j++) {
                    if (board[i][j] !== '.') {
                        box.push(board[i][j])
                    }

                }
            }
            let set = new Set(box)
            if (set.size !== box.length) {
                return false;

            }


        }
    }

    return true;

};

/** 旋转图像
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let tmp = matrix[i].shift();
            matrix[j].push(tmp);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].reverse()

    }
    return matrix
}

/**
 * 整数反转

 * @param num
 * @returns {*}
 */
function reverse(num) {
    var reverseNum = (Math.abs(num) + '').split('').reverse().join('');
    //判断是否超出范围
    return (reverseNum > Math.pow(2, 31) - 1 || reverseNum < Math.pow(2, 31) * -1) ?
        0 :
        num > 0 ? reverseNum : -reverseNum;
}

/**合并两个有序数组
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]
    }
    nums1 = nums1.sort(function (a, b) {
        return a - b
    })
    while (nums1.length > m + n && nums1[0] === 0) {
        nums1.shift()
    }
    return nums1;

};


/**第一个错误的版本
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 0;
        let r = n;
        while (l < r) {
            let mid = Math.floor((r - l) / 2 + r)
            if (isBadVersion(mid) === false) {
                l = mid + 1

            } else {
                r = mid
            }
        }
        return l


    };
};


/** 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n === 3) {
        return 3;
    }
    let result = []; //用数组result保存1-n个楼梯时走路的种数
    result[1] = 1;   //为了方便，数组下标从1开始保存数值，第n个表示n步有几种走法
    result[2] = 2;
    for (let i = 3; i < n + 1; i++) {
        result[i] = result[i - 1] + result[i - 2];
        console.log(result[i]);
    }
    return result[n];


};

/**买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length <= 1) {
        return 0
    }
    let max = 0;
    let min = prices[0];


    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > max) {
            max = prices[i] - min
        }
        if (min > prices[i]) {
            min = prices[i]

        }

    }
    return max;


};