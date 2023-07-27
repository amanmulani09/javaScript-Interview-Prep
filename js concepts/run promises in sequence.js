//helper function to create a promise 
// that resolves in certain time


const asyncTask = time =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`complete in ${time} time`)
        },time*100)
    })
}

// const arrayOfTask 

const taskArray = [
    asyncTask(4),
    asyncTask(2),
    asyncTask(7),
    asyncTask(8),
    asyncTask(5),
    asyncTask(3)
];

// main function to run promises in sequence 

const asyncPromiseExecutor = function(promises){
    promises.reduce((acc,curr)=>{
        // return when previous promise is resolved

        return acc.then(()=>{
            // cur current promise
            curr.then((val)=> console.log(val))
        });
    },Promise.resolve());
}
asyncPromiseExecutor(taskArray)