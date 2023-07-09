



// polyfill of Array.flat with the depth provided 


Array.prototype.myFlat = function(depth){
    if(this.length === 0) return -1;
    let output = [];

    for(let i =0; i<this.length; i++){
        if(Array.isArray(this[i]) && depth !== 0){
            output.push(...this[i].myFlat(depth-1))
        }else{
            output.push(this[i])
        }
    }
    return output;
}

const flattenWithTwo = [1,2,3,[4,5,[6,7,8]]].myFlat(1);
console.log(flattenWithTwo)


const userData = [
    {
    firstName:'aman',
    lastName:'mulani',
    age:21
},
     {
    firstName:'h',
    lastName:'a',
    age:30
},
     {
    firstName:'s',
    lastName:'return',
    age:26
},
     {
    firstName:'r',
    lastName:'k',
    age:37
},
    ]