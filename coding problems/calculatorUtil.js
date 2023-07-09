
function Calculator(num1,num2){

    const sum = ()=> num1+ num2;
    const difference = ()=> num1-num2;
    const product = ()=> num1*num2;
    const dividend = ()=> Math.floor(num1/num2)
    return {sum,difference,product,dividend}
}

const calc12and5 = Calculator(12,5);
// console.log(typeof calc12and5)
console.log(calc12and5.sum());
console.log(calc12and5.difference());
console.log(calc12and5.product());
console.log(calc12and5.dividend());


