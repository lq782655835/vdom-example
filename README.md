# vdom-example

虚拟dom
* 渲染成真实dom
    * `Element Class` VDOM数据结构：type、props、children
    * `createElement` 生成VDOM实例
        * React：React.createElement(type, [props], [...children]
        * Vue：在render函数中作为参数
    * `render`： VDOM生成dom实例。这部分在Vue、React框架中做了，并没有暴露出API
    * `renderDom` 把dom实例渲染到对应container中
        * React：ReactDOM.render(element, container[, callback])
        * Vue： $mount
* dom-diff
    * diff
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