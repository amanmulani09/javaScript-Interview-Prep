

Array.prototype.findDummy = function(callback){
    if(typeof callback !== 'function') return this;


    for(let ele in this){
        if(callback(this[ele],ele,this)){
            return this[ele]
        }
    }
    return -1;
}

// console.log(
//     [2,4,6,8,10].findDummy(item => item > 7)
// )


Array.prototype.filterDummy = function(callback){
    if(typeof callback !== 'function') return -1;
    let arr = this;
    let result = [];
    for(let item in arr){
        if(callback(arr[item],item,arr)){
            result.push(arr[item])
        }
    }
    return result;
}

console.log(
    [1,3,5,6,7,8,9,4].filterDummy(item => item < 7).sort((a,b)=> a-b)
)