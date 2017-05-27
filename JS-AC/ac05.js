//题目5：用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

var arr=new Array();

function push(node)
{
    var i=arr.length;
    arr[i]=node;
}

function pop()
{   
    var i=arr.length;
    if(i<=0){return ;}
    var k=arr[0];
    for(i=0;i<arr.length-1;i++){arr[i]=arr[i+1]};
    arr.length--;
    return k;
}