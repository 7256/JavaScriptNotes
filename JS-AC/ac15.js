//题目15：输入一个链表，反转链表后，输出链表的所有元素。

function isEmptyObject(obj) {
  for (var name in obj) {
  return false;
}
  return true;
} 

function ReverseList(pHead) {
    if (isEmptyObject(pHead)) {
        return false;
    }
    var pre = null;
    var next = null;
    while (pHead != null) {
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
}