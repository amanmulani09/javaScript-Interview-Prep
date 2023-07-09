

let  arr = [1,2,3,4,5,6,7,8,11,23,32,44,12];
let arr2 = [1,3,5,7,9]

 const sumOfEvens = (arr) => {
  // Write your code here
  let someAreEven = arr.some(item => item % 2== 0 || item %0 === 0)
     
     if(someAreEven === false) return 0
    let final = 0;
     arr.forEach(item =>{
         if(item %2===0){
            final+=item
         }
     })
     return final;
  // if()
}

sumOfEvens(arr);