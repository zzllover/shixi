# 实习所学

VSCode 快捷键

快速切换Tab  : option + command + 左右箭头

快速删除一行： command + shift + K

快速光标到所有行： command + option + 上下箭头

快速定位某一行的头尾： command + 左右箭头

快速文档首尾 ： command + 上下箭头

## react 和 react-dom分割开的原因

JSX到页面渲染经过的过程：

JSX ========>  JavaScript对象 ========> DOM元素  -->插入页面
   babel编译              ReactDOM.render渲染
   React.js构造

为什么不从 JSX 直接到 DOM？
1. JSX不一定直接渲染至浏览器页面 。有可能Canvas,app
2. 使用JS对象作为中间，使得更新组件时 不直接操作DOM，而是使用较快的算法操作JS对象，减少浏览器重排，优化性能。

## 关于setState合并

首先根据之前的DEMO，明白setState会重新渲染组件

React.js内部会将JS事件循环中的消息队列的同一个消息中的setState都进行合并以后在进行重新渲染组件

## props

父组件传入：属性 = 值
子组件接收： this.props.属性

默认的props：

static defaultProps = {

} //未传入时，作为替代

子组件不可以修改 props的值，但是可以通过父组件进行主动修改达到更新

## state 与 props

state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。

没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。前端应用状态管理是一个复杂的问题，我们后续会继续讨论。

```js
//函数式组件
const Hello = (props) => {

   const say = (event) => alert('hello world')
   return (
      <div onClick={say}>Hello world</div>
   )
}

```




