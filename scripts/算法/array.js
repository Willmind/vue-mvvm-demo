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
    return (reverseNum > Math.pow(2, 31) - 1 || reverseNum < Math.pow(2, 31)*-1) ?
        0 :
        num > 0 ? reverseNum : -reverseNum;
}
