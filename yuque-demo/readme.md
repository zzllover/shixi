# 项目概要

首先项目是基于umi框架的项目，其中引入antd UI框架。
umi不仅负责开发时webpack的打包编译等工作，还集成react-router的路由功能。
此外集成了现有的andt UI框架以供使用

## 静态部署

now部署  
npm install -g now

now ./dist

now ls 【列出所有项目】

## 编译工具

本项目使用`umi`作为编译工具
umi 不仅仅是一个编译工具，它同时也是一个前端框架。它对社区的 webpack，react-router 等进行的封装，使得我们可以基于它快速搭建一个 React 项目。

## umi-plugin-react

cnpm install umi-plugin-react --save-dev 来安装该插件集。然后在配置文件 config/config.js 中引入该插件

## dva框架

类似于主流的状态管理类的库：redux mobx

DVA基于redux redux-saga react-router

数据管理：在src/models 建立数据
        在当前文件夹 建立 model.js

## 项目结构

.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
└── package.json

## 使用mock数据

根目录创建mock文件夹
