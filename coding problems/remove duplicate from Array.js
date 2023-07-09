// using ForEach
// let removeDuplicates = (arr)=>{
//     let removedupsarr = [];
//     arr.forEach(item => removedupsarr.includes(item)? removedupsarr : removedupsarr.push(item));
//     return removedupsarr;
// }

// console.log(removeDuplicates(['hello','aman','write','hello',]));
// console.log(removeDuplicates([1,2,4,10,2,1]));

// using forLoop;

let removeDuplicatesfromArr = arr=>{
    let removedDupsArr = [];
    for(let i = 0; i<arr.length; i++){
    if(!removedDupsArr.includes(arr[i])){
        removedDupsArr.push(arr[i])
    }
        
    }
    return removedDupsArr;
}


console.log(removeDuplicatesfromArr(['hello','the','duplicate','word','duplicate']));
console.log(removeDuplicatesfromArr([1,4,2,3,4,2]));
