function SelfVue(data, el, exp) {
    var self=this;

    this.data = data;
    Object.keys(data).forEach(function (key) {
        self.proxyKeys(key) //绑定代理属性
   })
    observe(data)
    el.innerHTML = this.data[exp]; //初始化模板数据的值
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;

    });
    return this;


}

SelfVue.prototype = {
    proxyKeys: function (key) {

        // 代理属性
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: true,//enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
            configurable: true,//configurable 特性表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。
            get: function proxyGetter() {
                return self.data[key];
            },
            set: function proxySetter(newVal) {
                self.data[key] = newVal

            }


        })

    }
}