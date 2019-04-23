title: 深入浅出ECMAScript6
speaker: vincent
prismTheme: dark

<slide class="bg-blue aligncenter">
# 深入浅出 ECMAScript6 {.text-shadow}
## By 陈喆 18052224 {.text-intro}

<slide class="bg-blue">
## ECMAScript与JavaScript
## ES5,ES6,ES7...{.tobuild.fadeInLeft}

<slide class="bg-blue">
### 语法提案的批准流程
- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

<slide class="bg-blue">
### babel
```{.tobuild.fadeInLeft}
{
  "presets": [
    "es2015",
    "stage-0"
  ],
  "plugins": ["transform-runtime"]
}
```
- transform-runtime与babel-polyfill{.tobuild.fadeInLeft}
- babel-preset-env{.tobuild.fadeInLeft}

<slide class="bg-blue">
### let和const
- 没有变量提升，暂时性死区，不允许重复声明{.tobuild.fadeInLeft}
- 块级作用域{.tobuild.fadeInLeft}
- 顶层对象的属性与全局变量{.tobuild.fadeInLeft}

<slide class="bg-blue">
### 块级作用域
- ES6之前{.tobuild.fadeInLeft}
  - 全局作用域
  - 函数作用域
- ES6{.tobuild.fadeInLeft}
  - 块级作用域
### 顶层对象的属性与全局变量{.tobuild.fadeInLeft}
```{.tobuild.fadeInLeft}
let b = 1;
window.b // undefined
```
var命令和function命令声明的全局变量，依旧是顶层对象的属性{.tobuild.fadeInLeft}

而let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性{.tobuild.fadeInLeft}