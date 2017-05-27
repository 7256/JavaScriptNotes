//题目7：大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。n<=39

function Fibonacci(n){
    var val = [];
    if(n<=0){
        return 0;
    }else if(0<n && n<=2){
        return 1;
    }else{
        val[1]=1; //n为2
        val[2]=2; //n为3
        for(var i=3; i<n; ++i){
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}