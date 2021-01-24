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
            continue //跳出循环，然后保持start不变
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

/** Fizz Buzz
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let arr = [];
    for (let i = 1; i < n + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz')
        } else if (i % 3 === 0) {
            arr.push('Fizz')

        } else if (i % 5 === 0) {
            arr.push('Buzz')
        } else {
            arr.push(i.toString())
        }

    }
    return arr;
};

/** 多数元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)]
};

/** 搜索二维矩阵 II
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0) {
        return false;
    }
    let col = 0;
    let row = matrix.length - 1;
    while (col < matrix[0].length && row >= 0) {
        let flag = matrix[row][col]
        if (flag === target) {
            return true
        } else if (flag > target) {
            row--
        } else if (flag < target) {
            col++
        }
    }
    return false


};

/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 *
 */
/** 长度最小的子数组
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (nums.length === 0) return 0;
    const slideWindow = [];
    let acc = 0;
    let min = null;

    for (let i = 0; i < nums.length + 1; i++) {
        const num = nums[i];

        while (acc >= s) {
            if (min === null || slideWindow.length < min) {
                min = slideWindow.length;
            }
            acc = acc - slideWindow.shift();
        }

        slideWindow.push(num);

        acc = slideWindow.reduce((a, b) => a + b, 0);
    }

    return min || 0;
};



/** 翻转字符串里的单词
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.trim().replace(/\s+/g, ' ').split(' ');
    return arr.reverse().join(' ');
};

/** 矩阵置零 m * n
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let firstColHasZero = false;//列
    let firstRowHasZero = false;//行

    //保存第一行0的情况
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            firstRowHasZero = true
        }
    }

    //保存第一列0的情况
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true
        }
    }


    //遍历数组，用第一行和第一列保存其他行0的情况
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0           //第一列对应的行标为0
                matrix[0][col] = 0           //第一行对应的列标为0
            }

        }
    }
    //利用第一行第一列的记录，处理矩阵
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0
            }
        }
    }

    //处理第一行和第一列的情况
    //第一行有0，则全部置为0
    if (firstRowHasZero === true) {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0
        }
    }
    //第一列有0，则全部置为0
    if (firstColHasZero === true) {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0
        }
    }

    return matrix


};


/** 对角线遍历
 * @param {number[][]} matrix
 * @return {number[]}
 */

var findDiagonalOrder = function (matrix) {

    if (matrix.length < 1) {
        return []
    }
    var res = []
    var i = 0
    var j = 0
    var n = matrix.length
    var m = matrix[0].length
    var flag = true

    while (i < n && j < m) {
        res.push(matrix[i][j])
        m = matrix[i].length
        if (flag) {
            //右上移动
            i -= 1
            j += 1
        } else {
            //左下移动
            i += 1
            j -= 1
        }

        //边界处理：转弯
        if (i < 0 || j < 0 || i == n || j == m) {
            if (flag) {
                //右上
                if (j < m) {
                    i = 0
                } else {
                    i += 2
                    j--
                }
            } else {
                //左下
                if (i < n) {
                    j = 0
                } else {
                    i--
                    j += 2
                }
            }
            flag = !flag
        }
    }
    return res
};


/**寻找数组的中心索引
 * 统计总和 sum,用 sum 减当前元素 i 再除以 2 ,是否等于当前累加的和
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    if (nums.length < 3) return -1;
    let sum = eval(nums.join("+"));
    ;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if ((sum - nums[i]) / 2 === left) {
            return i
        }
        left += nums[i]
    }
    return -1;

};


/**搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    return nums.length;
};


/** 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    //排序
    intervals = intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    })


    let ans = [], start, end;
    //排序之后，看看有没有重叠的，如果有，合并
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i][0], e = arr[i][1];
        if (start === undefined) {
            start = s, end = e;
        } else if (s <= end) {
            end = Math.max(e, end)
        } else {
            let part = [start, end];
            ans.push(part)
            start = s;
            end = e
        }
    }
    if (start !== undefined) {
        let part = [start, end]
        ans.push(part)
    }

    return ans


};

/** 删除排序数组中的重复项 II
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            continue;
        }
        if (nums.lastIndexOf(nums[i]) - nums.indexOf(nums[i]) === 1) {
            i++;
            continue;
        }
        nums.splice(nums.indexOf(nums[i]), nums.lastIndexOf(nums[i]) - nums.indexOf(nums[i]) - 1)

    }

};

/** 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a) //降序排序
    for (let i = 0; i < nums.length; i++) {

        if ((k - 1) === i) {//i从0开始
            return nums[i]
        }
    }
};

/** 反转字符串中的元音字母
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i=0;
    let j=s.length-1;
    let arr=s.split('')
    let reg=/[aeiouAEIOU]/
    while (i<j){
        if(!reg.test(arr[i])){
            i++;
            continue;
        }
        if(!reg.test(arr[j])){
            j--;
            continue;
        }
        if(arr[i]!==arr[j]){
            let a=arr[i];
            let b=arr[j];
            arr[j]=a;
            arr[i]=b;
        }
        i++;
        j--

    }
    return arr.join('')

};


/**
 * 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0;
    let j=height.length-1;
    let max=0;
    while (i<j){
        max=Math.max(max,Math.min(height[i],height[j])*(j-i))
        if(height[i]>=height[j]){
            j--
        }else{
            i++
        }

    }
    return max;

};


