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
- babel-preset-env{.tobuild.fadeInLeft}
- transform-runtime与babel-polyfill{.tobuild.fadeInLeft}
  - NOTE: Instance methods such as "foobar".includes("foo") will not work since that would require modification of existing built-ins (Use babel-polyfill for that).{.tobuild.fadeInLeft}

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

<slide class="bg-blue">
### 解构赋值
- 只要等号右边的值不是对象或数组，就先将其转为对象{.tobuild.fadeInLeft}
 - 转为对象以后必须具备Iterator接口{.tobuild.fadeInLeft}
 - 类数组对象{.tobuild.fadeInLeft}
- 浅拷贝{.tobuild.fadeInLeft}
- 对象解构赋值可以取到原型对象上的属性{.tobuild.fadeInLeft}

<slide class="bg-blue">
### 数值的扩展
```{.tobuild.fadeInLeft}
isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
```
- Number.EPSILON{.tobuild.fadeInLeft}
```{.tobuild.fadeInLeft}
0.1 + 0.2 === 0.3 // false{.tobuild.fadeInLeft}
(0.1+0.2-0.3)<Number.EPSILON //true{.tobuild.fadeInLeft}
```

<slide class="bg-blue">
### 函数的扩展
- 参数默认值{.tobuild.fadeInLeft}
  - 不传或传undefined{.tobuild.fadeInLeft}
  - 惰性求值{.tobuild.fadeInLeft}
  - 作用域{.tobuild.fadeInLeft}
    - 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）{.tobuild.fadeInLeft}
- 箭头函数{.tobuild.fadeInLeft}
  - 所以如果箭头函数直接返回一个对象，必须在对象外面加上括号{.tobuild.fadeInLeft}
  - this指向的固定化,没有自己的this{.tobuild.fadeInLeft}
  - 不可以当作构造函数，不可以使用new命令{.tobuild.fadeInLeft}
  - 不可以使用arguments对象，该对象在函数体内不存在{.tobuild.fadeInLeft}
  - 不可以使用yield命令，因此箭头函数不能用作 Generator 函数{.tobuild.fadeInLeft}
- 尾调用{.tobuild.fadeInLeft}

<slide class="bg-blue">
### 数组的扩展1
- 扩展运算符{.tobuild.fadeInLeft}
  - 复制数组{.tobuild.fadeInLeft}
  - 合并数组{.tobuild.fadeInLeft}
  - 浅拷贝{.tobuild.fadeInLeft}
  - 将部署了Iterator接口的数据结构转为数组{.tobuild.fadeInLeft}
  - Generator函数{.tobuild.fadeInLeft}
- Array.from{.tobuild.fadeInLeft}
  - 将部署了Iterator接口的数据结构转为数组{.tobuild.fadeInLeft}
  - 将任何有length属性的对象转为数组{.tobuild.fadeInLeft}
  - 第二个参数，作用类似于数组的map方法{.tobuild.fadeInLeft}
- entries()，keys()和values(){.tobuild.fadeInLeft}
  - for...of进行遍历{.tobuild.fadeInLeft}
- Array.prototype.includes{.tobuild.fadeInLeft}

<slide class="bg-blue">
### 数组的扩展2
- Array.prototype.flat{.tobuild.fadeInLeft}
  - flat()默认只会“拉平”一层{.tobuild.fadeInLeft}
  - flat(Infinity)拉平所有嵌套层级{.tobuild.fadeInLeft}
  - 返回一个新数组，不改变原数组{.tobuild.fadeInLeft}
- Array.prototype.map{.tobuild.fadeInLeft}
  - 先执行map(),再执行flat(){.tobuild.fadeInLeft}
  - 只拉平一层{.tobuild.fadeInLeft}
  - 第二个参数，接受一个context，用于绑定函数内部this{.tobuild.fadeInLeft}
- 数组的空位{.tobuild.fadeInLeft}
  - ES5{.tobuild.fadeInLeft}
    - forEach(), filter(), reduce(), every() 和some()都会跳过空位{.tobuild.fadeInLeft}
    - map()会跳过空位，但会保留这个值{.tobuild.fadeInLeft}
    - join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串{.tobuild.fadeInLeft}
  - ES6{.tobuild.fadeInLeft}
    - 明确将空位转成undefined{.tobuild.fadeInLeft}
    - Array.from,(...),copyWithin(),fill(),entries(),keys(),values(),find(),findIndex(){.tobuild.fadeInLeft}
    - for...of循环也会遍历空位{.tobuild.fadeInLeft}

<slide class="bg-blue">
### 对象的扩展1
- 属性的简写{.tobuild.fadeInLeft}
```{.tobuild.fadeInLeft}
module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};
```
- 方法的简写{.tobuild.fadeInLeft}
```{.tobuild.fadeInLeft}
const o = {
  method() {
    return "Hello!";
  }
};
// 等同于
const o = {
  method: function() {
    return "Hello!";
  }
};
```
- 属性名表达式{.tobuild.fadeInLeft}
```{.tobuild.fadeInLeft}
a[i] = 1
a['name' + i] = 1
```

<slide class="bg-blue">
### 对象的扩展2
- 属性的可枚举{.tobuild.fadeInLeft}{.tobuild.fadeInLeft}
  - enumerable,Object.getOwnPropertyDescriptor(){.tobuild.fadeInLeft}
  - for...in: 只遍历对象自身的和继承的可枚举的属性{.tobuild.fadeInLeft}
  - Object.keys()：返回对象自身的所有可枚举的属性的键名{.tobuild.fadeInLeft}
  - JSON.stringify()：只串行化对象自身的可枚举的属性{.tobuild.fadeInLeft}
  - Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性{.tobuild.fadeInLeft}
  - Class的原型的方法都是不可枚举的{.tobuild.fadeInLeft}
  - 尽量不要用for...in循环，而用Object.keys()代替{.tobuild.fadeInLeft}
- 属性的遍历{.tobuild.fadeInLeft}
  - for...in：遍历对象自身的和继承的可枚举属性（不含Symbol属性）{.tobuild.fadeInLeft}
  - Object.keys：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性的键名（不含Symbol属性）{.tobuild.fadeInLeft}
  - Object.getOwnPropertyNames：返回一个数组，包含对象自身的所有属性（包括不可枚举属性）的键名（不含Symbol属性）{.tobuild.fadeInLeft}
  - Object.getOwnPropertySymbols：返回一个数组，包含对象自身的所有（包括不可枚举）Symbol属性的键名{.tobuild.fadeInLeft}
  - Reflect.ownKeys：返回一个数组，包含对象自身的所有键名，不管键名是Symbol或字符串，也不管是否可枚举{.tobuild.fadeInLeft}

<slide class="bg-blue">
### 对象的扩展3
- super关键字{.tobuild.fadeInLeft}
  - this关键字指向函数所在的当前对象，super关键字指向当前对象的原型对象{.tobuild.fadeInLeft}
  - 只能用在对象的方法中{.tobuild.fadeInLeft}
- 扩展运算符（...）{.tobuild.fadeInLeft}
  - 浅拷贝{.tobuild.fadeInLeft}
  - 等同于Object.assign(){.tobuild.fadeInLeft}
  ```{.tobuild.fadeInLeft}
  let aClone = { ...a };
  // 等同于
  let aClone = Object.assign({}, a);
  ```
- 解构赋值{.tobuild.fadeInLeft}

<slide class="bg-blue">
### 对象的新增方法1
- Object.is()
  - ===的问题
    - NaN不等于自身
    - +0等于-0
  - “Same-value equality”（同值相等）算法
- Object.assign
  - 如果该参数不是对象，则会先转成对象
  ```
  typeof Object.assign(2) // "object"
  ```
  - undefined和null无法转成对象
  ```
  Object.assign(undefined) // 报错
  Object.assign(null) // 报错
  ```
  - 浅拷贝
  - 遇到同名属性就替换
- Object.getOwnPropertyDescriptors()
  - ES8引入

<slide class="bg-blue">
### 对象的新增方法2
- __proto__
  - Object.prototype.__proto__
  - Object.setPrototypeOf()：写操作
  - Object.getPrototypeOf()：读操作
  - Object.create()：生成操作
- Object.keys(),Object.values(),Object.entries()
- Object.fromEntries()
  - Object.entries()的逆操作，用于将一个键值对数组转为对象
  ```
  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  Object.fromEntries(entries)// { foo: "bar", baz: 42 }
  ```

<slide class="bg-blue">
### Symbol
- ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值
  - Symbol.for()
- 作为对象的属性名
  - 下面这个构造函数有没有缺点？
  ```
  Function.prototype.myCall = function(context){
    if(!typeof this == 'function'){
      throw new TypeError('not function')
    }
    context = context || global;
    context.fn = this;
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn;
    return result;
  }
  ```
  - 只能用在属性表达式，不能用点运算符
- 作为属性名的遍历方法
  - 无法被常规方法遍历
  - 除了Object.getOwnPropertySymbols和Reflect.ownKeys