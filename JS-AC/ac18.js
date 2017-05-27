//题目18：操作给定的二叉树，将其变换为源二叉树的镜像。

function Mirror(root)
{
    if(root === null) {
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
}
