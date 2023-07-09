const findIndexOf = (string, substring) => {
    // Write your code here
    // if(!string.includes(substring)) return -1;
    
    // for(let i =0; i<string.length; i++){
    //   console.log(string[i],substring[0])
    //   if(string[i] === substring[0]){
    //     return i;
    //   }
    // }
    // return -1;
       return string.indexOf(substring)
  }
  
  findIndexOf('test1ing 123','123')