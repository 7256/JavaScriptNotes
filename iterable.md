```js
//Map
var m = new Map();
m.set("jack",99);
m.set("jones",100);
m.has("jones");
m.get("jones");
m.delete("jack");
m.get("jack");
console.log(m);


//Set只有key，没有Value的特殊Map
var s1 = new Set();
var s2 = new Set([1,2,3,'3']);
s1.add(4);
s1.add(4);
s2.delete(3);
console.log('s1 = ',s1,'s2 = ',s2);


```

```js
//为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型.
//遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。
//for ... of循环是ES6引入的新的语法
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
```

```js
//for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。
//当我们手动给Array对象添加了额外的属性后，for ... in循环将带来意想不到的意外效果：

var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
```

更好的方式是直接使用`iterable`内置的`forEach`方法，它接收一个函数，每次迭代就自动回调该函数。以`Array`为例：

```
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    alert(element);
});

```

*注意*，`forEach()`方法是ES5.1标准引入的

```js
var a = new Map([[1,'A'],[2, 'B'],[3, 'C']]);
a.forEach(function (value, key, map) {
//Map的回调函数参数依次为value、key和map本身
    console.log(key,"||",value);
});
```

```js
//Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：

var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
  //sameElement可以不要。由于JavaScript的函数调用不要求参数必须一致，因此可以忽略它们。
    alert(element);
});
```

