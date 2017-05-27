//题目11：输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

function NumberOf1(n) 
  { 
      if(n<0){
          n = n>>>0;
      }
      var res = n.toString(2); 
      var count = 0; 
      flag = 1; 
      for(var i = 0; i <res.length; i++){ 
          if(res[i] == 1){ 
              count++  
          } 
      } 
      return count; 
  }
