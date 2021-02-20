/** 快乐数
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // 无缓存破解
    if (n === 1) return true
    const list = new Set()
    while(!list.has(n)) {
        list.add(n)
        let sum = 0
        while(n) {
            const value = n % 10
            sum += (value * value)
            n = parseInt(n / 10)
        }
        if (sum === 1) return true
        n = sum
    }
    return false
}

/** 阶乘后的零
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let num=0;
    while (n>=5){
        n=Math.floor(n/5)
        num+=n
    }
    return  num

};

/**
 * Excel表列序号
 * @param s
 * @returns {number}
 */
var titleToNumber = function(s) {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let len = s.length, sum = 0
    for (let i = 0; i < len; i++) {
        sum = (arr.indexOf(s[i]) + 1) * Math.pow(26, len - 1 - i) + sum
    }
    return sum
};
