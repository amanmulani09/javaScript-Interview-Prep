
// makeRequest('google')
// .then((response)=>{
//     console.log(response)
//     return processRequest(response)
// })
// .then(function(response){
//     console.log(response);
// }).catch(function(error){
//     console.log(error)
// })

function makeRequest(search){

    return new Promise(function(resolve,reject){

        if(search === 'google'){
            resolve(search + ' says hi!')
        }else{
            reject('please use google!')
        }
    })
    
}

function processRequest(response){
    return new Promise(function(resolve,reject){
        console.log('Processing respoonse');
        setTimeout(()=>{
            resolve('Extra information! ' + response)
        },500)
    })
}

// same handle with the async await 
// a function which know it need to wait a bit for operations

// Syntax

async function doWork(){
    // here the response store the resolve data of makeRequest and it does not 
    // execute the code further untill the first await completes.
    try{
    const response = await makeRequest('google');
    console.log('response',response)
    const proccedResponst = await processRequest(response);
    console.log(proccedResponst)
    } catch(err){
        console.log(err)
    }
   
}

doWork();

// TLDL:: Async await makes the consumer part of promise easy 
// rather than promise chaining we can use the async function
// for the promise constructor the scnario should be the same 