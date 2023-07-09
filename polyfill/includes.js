

Array.prototype.myInclude = function(value){

    let arr = this;
//using the for of looop
    // for(let item of arr){
    //     if(item === value){
    //         return true
    //     }
    // }

    //using the for in looop

    // for(let ele in arr){
    //     if(arr[ele] == value){
    //         return true
    //     }
    // }

    //using normal forLoop

    for(let i = 0; i<arr.length; i++){
        if(arr[i]=== value){
            return true
        }
    }
    
    return false;
}

console.log(
    [2,4,6,8].myInclude(21)
)