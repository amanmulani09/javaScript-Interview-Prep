
function isArraySorted(array){
    if(!array) return -1;
 
    let count = 0;
    let len = array.length;
 
    for(let i =0; i<len; i++){
       if(array[i] > array[i+1]){
          count++
       }
    }
 
    if(count > 0 ) return false;
    return true;
    
 }
 
 isArraySorted([1,2,3,9,5,6,7])