const findLastIndexOf = (string, substring) => {
    // Write your code here
    if(!string.includes(substring))return -1;
    let lastIndex = 0;
    let final = string.split(' ').length >= 1 ? string.split(' '): string;
    console.log(final)
    for(let i = 0;i<final.length; i++){
      if(final[i]=== final){
        lastIndex = i
      }
    }
    return lastIndex
  }
  
  findLastIndexOf('This is a test string to find the last index of the word test','test')