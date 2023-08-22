export const findLongestWord = (sentence) => {
    // Write your code here
    if(sentence.length === 0) return null
    let longestWord = '';
    let strArr = sentence.split(' ');
  
    for(let word in strArr){
      if(strArr[word].length> longestWord.length){
        longestWord = strArr[word]
      }
    }
    return longestWord
  }