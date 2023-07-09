

Array.prototype.myFilter = function(callback){
    if(typeof callback !== 'function') return -1;
    let arr = this;
    let output = [];
    for(let i =0; i<arr.length; i++){
        if(callback(arr[i],i,arr)){
           output.push(arr[i])
        }
    }
    return output;
}

console.log(
    [2,4,6,7,10].myFilter(item => item > 5)
)

const data = [
    {
    id:'111',
    product:'milk',
    price:50
},
      {
    id:'232',
    product:'tea',
    price:150
},
      {
    id:'331',
    product:'beer',
    price:190
},
      {
    id:'521',
    product:'cofee',
    price:1000
},
    
];

console.log(
    data.myFilter(product => product.price > 100)
);