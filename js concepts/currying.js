
// let multiply = function(x,y){
//     console.log(x*y);
// }

// //currying using the bind method.

// let multiplyByTwo = multiply.bind(this,2);

// console.log(multiplyByTwo(10));


// using the closoures way;

const multiplyClosoures = function(x){

    return function(y){
        return console.log(x*y);
    }
}

const mulplybyTen = multiplyClosoures(10);

mulplybyTen(10)

