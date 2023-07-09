
Array.prototype.myUnshift = function(item){
    return [item,...this]
}

let final = [1,2,3].myUnshift(9);
console.log(final)