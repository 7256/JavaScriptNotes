//题目6：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length === 0) {
        return 0;
    }
    if (rotateArray.length === 1) {
        return rotateArray[0];
    }
    var index = parseInt(Math.floor((rotateArray.length) / 2));
    var left = rotateArray.slice(0, index);
    var right = rotateArray.slice(index);
    var recuArray;//rotateArray[index-]>=rotateArray[0]?right:left;
    if (rotateArray[index - 1] < rotateArray[0]) {
        recuArray = left;
    } else {
        //是否还是旋转数组
        if (right[0] <= right[right.length - 1]) return right[0];
        else recuArray = right;
    }
    return minNumberInRotateArray(recuArray);
}