const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});


// Expected output: Array [3, 42, "foo"]

Promise.customAll = function(promiseArr){

    return new Promise((resolve,reject)=>{

        const result = [];
        let count = 0;

        if(promiseArr.length === 0){
            resolve(result)
        };

        for(let i =0; i<promiseArr.length; i++){

            Promise.resolve(promiseArr[i]).then((res)=>{
                result[i] = res;
                count++

                if(count === promiseArr.length){
                    resolve(result);
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        
    })
}

Promise.customAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});