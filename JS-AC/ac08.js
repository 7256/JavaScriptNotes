//题目8：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

function jumpFloor(number)
{

    if(number == 1){
       return 1;
    }
    if(number == 2){
       return 2;
    }
    n1 = 1;
    n2 = 2;
    while(number > 2){
       tmp = n2;
       n2 = n1+n2;
       n1 = tmp;
       number--;
    }
    return n2;
}