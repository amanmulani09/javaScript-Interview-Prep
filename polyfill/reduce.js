


Array.prototype.myReduce = function(callback,initial){
    if(typeof callback !== 'function' || this.length === 0) return -1;
    let result = initial;
    let arr = this;

    for(let i =0; i<arr.length; i++){
        result = result !== undefined ? callback(result,arr[i],i,arr) : arr[i]
    }
    return result;
}

// console.log(
//     [1,2,3,4,5,6,7,8,9,10].myReduce((acc,value)=> acc+=value)
// )