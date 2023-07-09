const removeFalsy = (arr) => {

    if(arr.length < 1){
      return arr
    }else{
      let result = arr.filter((item)=> [false,null,undefined,0,NaN].includes(item) ? false : true)
      return result;
    }
    // Write your code here
  }
  
  console.log(removeFalsy([true,11,'hello',false,undefined]))
  
  