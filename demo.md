title: 代码规范的二三事
speaker: 吴建金
url: https://github.com/mosaic101/nodeppts
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]
![qrcode](/img/qrcode.png)
签到打卡
----

[slide]
# 代码规范的二三事
## - by 吴建金

[slide]
# 自我介绍
- Title - 来自消费者研发中心**核心交易部门**四级页
- Github - https://www.github.com/mosaic101
- Blog - http://www.wujianjin.com
- Wechat - wjjqwe123

[slide]
# 背景介绍
- 每个人写代码的思维方式、思路、方法不同，技术水平也不同 {:&.rollIn}
- 谷歌发布的代码规范中指出，80% 的缺失是由 20% 的代码所引起的

[slide]
# 程序员应该重视

- 正确性 {:&.zoomIn}
    - 在所有程序中使用的任何东西，都必须做你想要的，并且没有错误
    - 代码风格并不会使程序更正确，但是在发布之前，检查工具可以帮你捕获一些错误
- 可读性
    - 阅读和尝试理解程序比编写代码要花费更多的精力和时间，因此请为未来的自己和维护代码的其他人进行可读性优化
    - 写 human-readable 的代码比风骚的走位更重要
- 高效率
    - 花最少的时间写最好的 Code
- 幸福感
    - 代码无 bug
    - 享受生活，享受 Coding
    - 人生苦短，我用 js

[slide]
- DEMO_01:
```javascript
// 转16进制
const conversionToString = str => {
    let strRes = ''
    if (null ! = str && '' != str.replace(/^\s*|\s*$/,'')) {
        for (let i = 0, j = str.length; i < j; i++) {
        strRes += str.charCodeAt(i).toString(16)
        }
    }
    return strRes
}
```

[slide]
- DEMO_02:
```javascript
async generateQrcode (scene) {
    try {
      const result = await request({
        method: 'POST',
        url: `${host.mbpss}/mpbss-web/wx/generateQrcode.do`,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          appid: 'mainApp',
          page: 'pages/fourth/fourth',
          sence,
          width: '120',
          suffix: 'png' || 'jpg'
        }
      })
      const data = JSON.parse(protocol(result.data))
      if (data && data.code === '0') return data.result // url
      throw new Error('fourth:request:generateQrcode')
    } catch (err) {
      err.code = 'E001-generateQrcode'
      throw err
    }
}
```

[slide] 
# 什么是代码规范？
----
- 代码规范就是指导如何编写和组织代码的一系列标准 

[slide]
# 为什么需要代码规范？
----
- 统一代码风格，告别脏乱差的代码 {:&.rollIn}
- 提高代码可读性、正确性
- 提高开发效率
- 提高项目健壮性
- 减少代码审查过程中反反复复的修改过程，节约时间 // TODO

[slide]
# 代码规范点
----
- ESLint (JSLint、JSHint、TSLint、HTMLHint、CSSLint) {:&.zoomIn}
- EditorConfig
- Code comments
- Error
- JSDoc
- File Header // optional

[slide]
# 主流代码规范标准
----
- google 开源项目代码规范 {:&.fadeIn}
    - https://google.github.io/styleguide/jsguide.html
    - 只有遵守了这里的规则，一个 JavaScript 源文件才能被称为“Google Style”

- 一份最合理的 JavasScript 代码规范
    - airbnb - https://github.com/airbnb/javascript

- 一份强大的 JavaScript 代码规范，自动代码纠正、没有配置、自动格式化代码。可以在编码早期就发现规范问题和低级错误
    - standard - https://github.com/standard/standard
    - https://github.com/standard/standard/blob/master/docs/README-zhcn.md

[slide]    
# ESLint
---
- 使用 Espree 解析 JavaScript {:&.zoomIn}
- 使用 AST 去分析代码中的模式
- 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则

[slide]
# Standard
- https://github.com/standard/standard {:&.zoomIn}
- 制定了所谓 standard(标准)的 JS 代码规范
- 配合编辑器插件可以实时检查代码规范以及语法错误
- 忽略某些不需要执行代码规范的文件
- git pre-commit钩子，在每次 commit 之前检查代码规范 - TODO
- 自动修复不合规范的代码,使其符合规范


[slide]
# 如何使用 Standard
```
// 安装
使用本规范最便捷的方式是全局安装，运行：

$ npm install standard --global

或者非全局的方式，针对某个项目进行安装：

$ npm install standard --save-dev

或者利用 eslint 依赖 standard 标准

$ npm install eslint -g
$ eslint --init // 选择 standard

注意：运行以上命令的前提是已经安装了 Node.js 和 Npm

// 使用

运行任何一个文件或者文件夹：

$ eslint yourfile.js --fix

```

[slide]
# EditorConfig
----
- https://editorconfig.org
- 在团队开发中，统一的代码格式是必要的。但是不同开发人员的代码风格不同，代码编辑工具的默认格式也不相同，这样就造成代码的differ。而editorConfig可以帮助开发人员在不同的编辑器和IDE中定义和维护一致的编码风格
- editorConfig不是什么软件，而是一个名称为.editorconfig的自定义文件。该文件用来定义项目的编码规范，编辑器的行为会与.editorconfig 文件中定义的一致，并且其优先级比编辑器自身的设置要高，这在多人合作开发项目时十分有用而且必要

[slide]
# EditorConfig
----
- 有些编辑器默认支持editorConfig，如webstorm；而有些编辑器则需要安装editorConfig插件，如ATOM、Sublime、VS Code等
- 当打开一个文件时，EditorConfig插件会在打开文件的目录和其每一级父目录查找.editorconfig文件，直到有一个配置文件root=true
- EditorConfig的配置文件是从上往下读取的并且最近的EditorConfig配置文件会被最先读取. 匹配EditorConfig配置文件中的配置项会按照读取顺序被应用, 所以最近的配置文件中的配置项拥有优先权
- 如果.editorconfig文件没有进行某些配置，则使用编辑器默认的设置

 
[slide]
# EditorConfig
- editorConfig配置文件需要是UTF-8字符集编码的, 以回车换行或换行作为一行的分隔符
- 斜线(/)被用作为一个路径分隔符，井号(#)或分号(;)被用作于注释. 注释需要与注释符号写在同一行
```
indent_style    设置缩进风格(tab是硬缩进，space为软缩进)
indent_size     用一个整数定义的列数来设置缩进的宽度，如果indent_style为tab，则此属性默认为tab_width
tab_width       用一个整数来设置tab缩进的列数。默认是indent_size
end_of_line     设置换行符，值为lf、cr和crlf
charset         设置编码，值为latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用utf-8-bom
trim_trailing_whitespace  设为true表示会去除换行行首的任意空白字符。
insert_final_newline      设为true表示使文件以一个空白行结尾
root        　　　表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件  
```  

[slide]
# Editorconfig 使用案例
```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
```

[slide]
# JSDoc
----
- http://usejsdoc.org
- JSDoc是一个根据javascript文件中注释信息，生成JavaScript应用程序或库、模块的API文档 的工具。你可以使用他记录如：命名空间，类，方法，方法参数等。类似JavaDoc和PHPDoc。现在很多编辑器或IDE中还可以通过JSDoc直接或使用插件生成智能提示。从而使开发者很容易了解整个类和其中的属性和方法，并且快速知道如何使用，从而提高开发效率，降低维护成本

[slide]
# 团队建设展望点
- 完善项目规范 {:&.bounceIn}
- 整理项目文档
    - 背景说明
    - 代码结构
    - 功能模块 （业务边界）
    - 开发流程 （开发环境以及账号权限）
    - 部署发布
    - 遗留问题
    - TODO List
    - Change Log
    - 性能优化点

- 定期执行 Code Review （后期展望）
- 执行 Test （后期期望）


[slide]
# Thanks!!!