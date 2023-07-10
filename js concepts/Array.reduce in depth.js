// Array.reduce 

//Array.reduce(callbackfn, intialvalue);

//callback function of reduce can have 4 parameters

// ● previousValue – The value returned from the last call of the same function or the initial value at the beginning.
// ● currentValue – Current value of the array.
// ● currentIndex – Current index position of the iteration.
// ● array – The array itself.

//Using this method we can perform different types of operations.

//aggregation

const arr = [1, 2, 3, 4];

//sum all the numbers of array

console.log(
    arr.reduce((previousValue,currentValue)=>{
        const nextValue = previousValue + currentValue;
        return nextValue
    })
)

//multiply all the elements of array 

console.log(
    arr.reduce((prevVal,currVal)=> prevVal*=currVal)
)

//Segregation
//We can group a certain set of values depending on our requirements.

const arr1 = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const segrigate = arr1.reduce((previousValue,currentValue)=>{

//roundup the value 

const floored = Math.floor(currentValue);

//if the key is not present create the new entry with array value

    if(!previousValue[floored]){
        previousValue[floored] = []
    }

// segregate the current value in the respective key
previousValue[floored].push(currentValue)

return previousValue;
},{})

console.log(segrigate)

//Run in sequence

// Let’s say we have an array of functions and a value, the value has to be
// passed through these functions in a pipe. Like the initial value has to
// be passed to the first function and then the returned value from the
// first function has to be passed to the next function and so on.


// functions
const upperCase = (str) => {
return str.toUpperCase();
};

const reverse = (str) => {
return str.split('').reverse().join('');
};

const append = (str) => {
return "Hello " + str;
};

// array of functions to be piped
const arrofFn = [upperCase, reverse, append];

// initial value
const initialValue = "jsisawesome";

const finalValue = arrofFn.reduce((previousValue,currentElement)=>{
// pass the value through each function
// currentElement is the function from the array

 const newValue = currentElement(previousValue);
    console.log(newValue)
    return newValue;
},initialValue)

// console.log(finalValue)


//Similarly, if we want to run a promise in a sequence we can do the
// same with this.

// helper function to create a promise
// that resolves after a certain time
const asyncTask = function(time) {
        return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Completing ${time}`), 100*time);
    });
    }
// create an array of task

const promises = [
asyncTask(3),
asyncTask(1),
asyncTask(7),
asyncTask(2),
asyncTask(5),
];

// main function to run promise in series

const asyncSeriesExecuter = function(promises) {
promises.reduce((acc, curr) => {
// return when previous promise is resolved
return acc.then(() => {
// run the current promise
return curr.then(val => {console.log(val)});
});
}, Promise.resolve());
};

asyncSeriesExecuter(promises);
