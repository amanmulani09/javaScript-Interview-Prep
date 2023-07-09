

Array.prototype.customEvery = function(callback){

    for(let i in this){
        if(!callback(this[i],i,this)){
            return false
        }
    }
    return true
}

const isGreaterThanFive = (value,index,arr)=> value > 5
console.log([10,55,10,3,2,5,].customEvery(isGreaterThanFive))