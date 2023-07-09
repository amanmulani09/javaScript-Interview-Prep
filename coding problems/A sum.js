

function sum(number){

    return function(num2){
        return number+num2
    }
}

const sumOne = sum(1);

console.log(sumOne(2)== 3) // pass

console.log(sumOne(3)==4) // pass

console.log(sum(1)(2))