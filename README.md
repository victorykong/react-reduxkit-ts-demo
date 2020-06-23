# 会后总结

### 最优的弹窗方式 ui 组件库已经给我们演示了，分别是
* 复杂形式的弹窗，则使用内聚 state 管理
* js 脚本的方式起一个弹窗，不依赖于 react 环境，Dialog.show(...)


### redux 方式管理弹窗
* 必须依赖于 redux 的环境
* 写法较复杂

### 静态编译不通过
* 位于 react-reduxkit-ts-demo/src/Demo3/components/Dialog1.tsx
* interface 去掉 ? 就报错的原因是，的确在静态编译阶段，Dialog1 未接收到 desc 和 friends 这两个变量（可以将鼠标移到 ...props 上查看，另外这两个参数是没有被推导出来的）
* 解决：可以使用 {...props as Dialog1Props} 的方式，这样只是为了避免不要出错而写的，没有任何意义，因为内部已经定义一遍类型，外部引入的时候再次写


### 要考虑的点
* 除了在 react 组件环境中能调用，也应该在任何地方可以唤起弹窗（出于这点 redux 的方式可以彻底排除）


### gyl 提到的几个点
* 参考 public 中的截图
