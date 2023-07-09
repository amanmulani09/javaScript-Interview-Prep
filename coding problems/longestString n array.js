const findLongest = (array) => {
    // Write your code here
    if(array.length === 0) return '';
    let longestString = '';
  
    for(let i =0; i<array.length; i++){
      let currentStr = array[i];
      if(currentStr.length > longestString.length){
        longestString = currentStr
      }else{
        longestString = longestString
      }
    }
    return longestString;
  }