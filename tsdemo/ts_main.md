## TypeScript十分钟入门


它是一种可以编译成 JavaScript 的编程语言，是为构建**大型复杂应用程序的开发者**们而设计的。它继承了许多语言的编程思想，比如 C# 和 Java，并且相对于宽松自由式的 JavaScript，它添加了更多的规则和约束。

### 工作中使用 TypeScript的好处

工作中使用 TypeScript 确实有许多好处：

基于静态类型，用 TypeScript 编辑代码有更高的预测性，更易纠错。
由于模块，命名空间和强大的面向对象编程支持，使构建大型复杂应用程序的代码库更加容易。
TypeScript在编译为JavaScript的过程中，在它到达运行时间前可以捕获所有类型的错误，并中断它们的执行。
即将到来的 ** Angular 2 框架** 就是用 ** TypeScript ** 编写的，同时推荐开发人员在项目中也使用这种语言。

### 安装

基于Node,Npm

`npm install -g typescript"

版本查询

`tsc -v`

### 编辑器支持

Sublime直接安装`TypeScipt`,编译为`Command+B`，编译后生成 `*.js` 文件。支持函数参数提示，跳转，括号匹配等。

[插件的详细使用](https://github.com/Microsoft/TypeScript-Sublime-Plugin)

命令行编译方式

`tsc main.ts`编译后会生成一个main.js文件。

自动编译方式(自动化进程)

`tsc main.ts --watch`

### 配置文件tsconfig.json

[项目的自动化配置](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### 模式

参见这个模式 [tsconfig模式](http://json.schemastore.org/tsconfig)

tsconfig.json可以是个空文件，那么编译器则使用默认编译选项，编译当前目录及其子目录下的所有文件。

命令行上提供的编译选项会覆盖tsconfig.json文件中的对应选项。

- compileOnSave

在最顶层设置compileOnSave标记，可以让IDE在保存文件的时候根据tsconfig.json重新生成文件。例如

```json
{	
   "compileOnSave":true,
   "compilerOptions": {
       "target" : "es6"
   }
}
```

### 在线编辑器

ts在线直观编辑器（ts to js），http://www.typescriptlang.org/playground

更多参考

[中文](http://wiki.jikexueyuan.com/project/typescript/tsconfig.html)   
[英文]（http://www.typescriptlang.org/docs/handbook/tsconfig-json.html）   
[官方入门指南](http://www.typescriptlang.org/docs/tutorial.html)   
★[HandBook中文](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)
