//题目3：输入一个链表，从尾到头打印链表每个节点的值。

function printListFromTailToHead(head)  
{
    if(!head){return 0;}else{  
         var arr=new Array();  
         for(var q=head;q;q=q.next){  
             arr.push(q.val);  
         }  
     arr.reverse();  
     return arr;  
    }  
}