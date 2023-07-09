
Array.prototype.myForEach = function(callback){
    if(typeof callback !== 'function' || this.length === 0) return -1;

    for(let i = 0; i<this.length; i++){
        callback(this[i],i,this);
    }
}

console.log(
    [].myForEach(item => console.log(item * 2))
)