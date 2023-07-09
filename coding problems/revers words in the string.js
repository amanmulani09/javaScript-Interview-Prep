var reverseWords = function(s) {
    //  let final = '';
    function revers(str){
      let output = str.split('').reverse().join('');
      return output;
    }
  let strArr = s.split(' ')
   let final=  strArr.map(item=>{
   if(strArr.length < 2){
     return revers(strArr)
    }else{
      return revers(item)
    }
    })
   return final.join(' ')
  };
  
  console.log(reverseWords("hello my friends let's play"))