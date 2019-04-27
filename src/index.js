// 引入createElement、render和renderDom方法
import { createElement, render, renderDom } from './element';
import diff from './diff';
import patch from './patch';

import React from 'react'
let vdom = React.createElement('h1', {class: 'item', someProp: 'foobar'}, 'hello world')
console.log(vdom, 'react vdom')

let virtualDom = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'}, ['周杰伦']),
    createElement('li', {class: 'item'}, ['林俊杰']),
    createElement('li', {class: 'item'}, ['王力宏'])
]);
console.log(virtualDom);

let el = render(virtualDom); // 渲染虚拟DOM得到真实的DOM结构
console.log(el);
// 直接将DOM添加到页面内
renderDom(el, document.getElementById('root'));

let diffInstance = () => setTimeout(() => {
    // diff
    let virtualDom2 = createElement('ul', {class: 'list'}, [
        createElement('li', {class: 'item'}, [
            createElement('a', {class: 'a-link'}, ['测试']),
            createElement('a', {class: 'a-link'}, ['测试123']),
        ]),
        createElement('li', {class: 'item'}, ['林俊杰']),
        createElement('li', {class: 'item'}, ['王力宏'])
    ]);
    // diff一下两个不同的虚拟DOM
    let patches = diff(virtualDom, virtualDom2);
    console.log(patches);
    // 将变化打补丁，更新到el
    patch(el, patches);
}, 1000)

true && diffInstance()


