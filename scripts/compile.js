function nodeToFragment(el) {
    var fragment = document.createDocumentFragment()
    var child = el.firstChild
    while (child) {

        //将dom元素移入fragment中
        fragment.appendChild(child)
        child = el.firstChild

    }
    return fragment;

}

function compileText (node, exp) {
    var self = this;
    var initText = this.vm[exp];
    this.updateText(node, initText);  // 将初始化的数据初始化到视图中
    new Watcher(this.vm, exp, function (value) {  // 生成订阅器并绑定更新函数
        self.updateText(node, value);
    });
},

function compileElement(el) {
    var childNodes = el.childNodes;
    var self = this;
    [].slice.call(childNodes).forEach(function (node) {
        var reg = /\{\{(.*)\}\}/;
        var text = node.textContent;
        if (self.isTextNode(node) && reg.test(text)) {
            self.compileText(node, reg.exec(text)[1]);
        }


        if (node.childNodes && node.childNodes.length) {
            self.compileElement(node);  // 继续递归遍历子节点
        }

    })


}
function (node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value;
}