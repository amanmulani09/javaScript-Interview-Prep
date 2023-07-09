Array.prototype.duplicate= function(){
    let duplicated = [...this,...this];
    return duplicated;
}


console.log([2,4,6].duplicate())
