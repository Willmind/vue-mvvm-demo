//从大到小排序testArray各项

//a - b(小到大)
//b - a(大到小)
let arr = [111, 6, 24, 24, 24, 2, 5324, 234, 23, 1, 2345235]

// arr.sort((a, b) => a - b)

/**
 * 获取某个元素的下标
 * @param arr 传入的数组
 * @param obj 需要获取下标的元素
 * @returns {boolean|*}
 */
function contains(arr, obj) {
    let i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return i
        }
    }
    return false;
}

//从大到小排序testArray各项
function compare(arr) {
    let max
//外层循环
    for (let i = 0; i < arr.length; i++) {

        //内层循环
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {

                //把大的值赋给max
                //i j交换位置
                max = arr[j];
                arr[j] = arr[i]
                arr[i] = max

            }
        }

    }
    return arr
}

/**
 * 遍历数组法
 * 数组去重
 */

function unique(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        //判断当前数组的第i项是否已经保存进了临时数组（判断重复）
        //不重复的话把当前项push进去临时数组里面
        if (a.indexOf(arr[i]) === -1) {
            a.push(arr[i])
        }
    }
    return a
}

