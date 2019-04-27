# vdom-example

虚拟dom
* 渲染成真实dom
    * `Element Class` VDOM数据结构：type、props、children
    * `createElement` 生成VDOM实例
        * React：React.createElement(type, [props], [...children]
        * Vue：在render函数中作为参数
    * `render`： VDOM生成dom实例。这部分在Vue、React框架内部实现，并没有暴露出API
    * `renderDom` 把dom实例渲染到对应container中
        * React：ReactDOM.render(element: React$Element<any>, container[, callback])
        * Vue： $mount
* dom-diff
    * diff
        * 假设不同type有不同的数据类型
    * patch

``` js
// vue
render: function (createElement) {
    return createElement('h1', {
        class: 'item',
        props: {
            someProp: 'foobar'
        },
        on: {
            click: this.handleClick
        }
    }, 'hello world')
}

new Vue({
    render: createElement => createElement(app)
}).$mount('#root')
```

``` js
// react
ReactDOM.render(
    React.createElement('h1', {
        class: 'item',
        someProp: 'foobar'
    }, 'hello world'),
    document.getElementById('root')
);
```

其他源码实现
* [simple-virtual-dom](https://github.com/livoras/simple-virtual-dom) 当前版本的完整版
* [Building a Simple Virtual DOM from Scratch](https://github.com/ycmjason-talks/2018-11-21-manc-web-meetup-4)

## 参考文章

* [让虚拟DOM和DOM-diff不再成为你的绊脚石](https://mp.weixin.qq.com/s/WHvQQDGpNHqhDSjtvn8JVA)
* [Building a Simple Virtual DOM from Scratch](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05#mount-node-target)
