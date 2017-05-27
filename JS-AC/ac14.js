//题目14：输入一个链表，输出该链表中倒数第k个结点。

function FindKthToTail(head, k) {
    if (!head || k <= 0) { return null; } else {
        var q = head;
        var p = head;
        for (var i = 0; i < k - 1; i++) {
            if (p.next)
            { p = p.next; } else {
                return null;
            }
        }
        for (; p.next; p = p.next) {
            q = q.next;
        }
        return q;
    }
}