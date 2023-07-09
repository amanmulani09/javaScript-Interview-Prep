
Array.prototype.latestMap = function(callback){
    let output = [];

    this.forEach((item,index)=>{
        output.push(callback(item,index,this))
    })
    return output;
    
}

console.log([2,5].latestMap((item)=> item*2));
