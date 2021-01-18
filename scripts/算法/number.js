/**
 * 3的幂
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n === 1) {
        return true;
    } else if (n === 0 || n / 3 * 3 !== n) {
        return false;

    } else if (n === 3) {
        return true;
    }
    return isPowerOfThree(n / 3)

};

/** 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    if (s.includes("IV") || s.includes("IX")) result -= 2;
    if (s.includes("XL") || s.includes("XC")) result -= 20;
    if (s.includes("CD") || s.includes("CM")) result -= 200;
    for (let c of s) {
        switch (c) {
            case "I":
                result += 1;break;
            case "V":
                result += 5;break;
            case "X":
                result += 10;break;
            case "L":
                result += 50;break;
            case "C":
                result += 100;break;
            case "D":
                result += 500;break;
            case "M":
                result += 1000;break
        }
    }

    return result

};

/** 计数质数
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 1) return 0;

    let count = 0;
    for (let i=2; i<n; i++) {
        if (i > 3 && (i % 2 === 0 || i % 3 === 0)) continue;
        if (isPrime(i)) count++;
    }

    return count;

    function isPrime(num) {
        let p = Math.sqrt(num);

        for (let i=2; i<=p; i++) {
            if (num % i === 0) return false;
        }

        return true;
    }
};
