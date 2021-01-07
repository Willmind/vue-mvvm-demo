function defineReactive(data, key, val) {
    observe(val) //递归遍历所有子属性

    var dep = new Dep()
    Object.defineProperty(data, key, {
        enumerable: true,//enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
        configurable: true,//configurable 特性表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。

        get: function () {
            if (Dep.target) { // 判断是否需要添加订阅者
                //添加订阅者
                dep.addSub(Dep.target)// 在这里添加一个订阅者
            }
            return val

        },
        set: function (newVal) {

            if (val === newVal) {
                return;
            }
            val = newVal;
            dep.notify()

        }


    })


}

Dep.target = null;

function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }

    //Object.keys(object)
    //返回一个对象所有可枚举属性的字符串数组
    Object.keys(data).forEach(function (key) {

        /**
         * key 属性
         * data[key]值
         */
        defineReactive(data, key, data[key]);
    })

}

/**
 * 创建一个可以容纳订阅者的消息订阅器Dep，订阅器Dep主要负责收集订阅者，然后再属性变化的时候执行对应订阅者的更新函数
 * @constructor
 */
function Dep() {
    this.subs = [];
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update()
        })
    }
}


