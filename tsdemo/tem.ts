//2017年2月21日 星期二下午11:44

var a = 12;
var a:number=12;


var b;
var b:any;

// 7.冲突检测(编译器会自动排除掉无用的选项)



// 8.联合类型

var c:number|string;

c=12;
c='abc';

// 9.数组也有类型

// var arr:number[]=[12,13,14];
var arr=[12,13,14];
// var arr=[12,'hao',13];
arr.push(55);


/*
类型
	基本类型：
	联合类型：选择
		var a:string|booolean;
	类型推测（隐式型类型申明）
			var a=12;
			var a:number=12;
	**tsc只编译，不执行，执行用node *.js**

	★类型检查的好处。
	强类型语言。

	ts函数参名和js有区别（参数个数，类型对应）
*/

/*
 函数类型
 	1.参数
 		有类型
 		签名检查---个数，类型对应
	2.返回值
		外部变量声明


*/


/* 引入外部变量,windows和document都是申明过的
declare var $;

$(function(){
	$('#div1').css('width','200px');
});

*/



/*
declare var Rapheal;
//windows和document都是ts申明过的,Rapheal是绘图库
window.onload=function(){
	document.getElementById('div1').onclick=function(){
		alert('abc');
		var page=Rapheal(0,0,400,300);
	};
};

*/

/*
	★函数可以有签名,ts基于es6
	签名就是参数，个数，返回什么样的

	function ajax(url:string,success:(res:string,code:number)=>void,
	error:(code:number)=>void){
	;
}

ajax(
	'1.txt',
	function(str:string,code:number){

	},
	function(code:number){

	}
	);

*/


/*
	类型:
		1.基本类型
		2.联合类型--选择
		3.函数签名
		4.复合类型（Object Type官方叫法）


	// 可选参数
	var obj:{x:number,y:number,z?:number};
	obj={x:12,y:5};
	obj={x:12,y:5,z:99}

*/

/*
接口（和JAVA的接口有区别）

接口：约定、限制(必须遵守的规范)

和枚举的区别，接口约定的是成员不是值。

	interface Point{
		x:number,
		y:number
	}

	var p:Point;

	p={x:5,y:6};

*/


/*
	class,extend,多继承
*/

/*

	访问修饰符
	1.public
	2.private
	3.protected 受保护-友元	只有子类能用

*/


/*
	泛型（在大型项目才体现出优势），和“any”有区别 ★ 宽泛

	class Calc<T>{
		a:T;
		b:T;
	}

	var obj = new Calc<number|string>();

	obj.a = 2;
	obj.b = 'abc';
*/

/*
	Array--泛型
	数组的实现
	interface Array<T>{
		reverse():T[];
		sort(compare?:(a:T,b:T)=>number);
		...
	}

	//Array的等效写法
	// var arr =[1,2];
	// var arr:number[]=[12,5];
	var arr:Array<number>=new Array();

*/


/*
	1.环境
	2.类型
	3.可选参数
	4.class写法
	5.interface--约定、规范
	6.泛型
*/
