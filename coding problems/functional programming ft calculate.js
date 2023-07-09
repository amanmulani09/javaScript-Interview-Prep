
// functional programming we should right in this way
// function can be reusble, modular, single responsibility, and easy to read. 
const addition = (num1,num2)=> num1+num2;
const subtraction = (num1,num2) => num1-num2
const multiplication = (num1,num2) => num1*num2


const calculate = (num1,num2,logic) => logic(num1,num2);

// console.log(calculate(10,20,multiplication))

Array.prototype.myMap = function(callback){
    let output = [];

    for(let i=0; i<this.length; i++){
        output.push(callback(this[i],this))
    }
    return output;
}
console.log([1,2,3,4,5].myMap(value => value*2))
