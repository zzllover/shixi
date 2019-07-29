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