
const sumofTwo = function(arr,sum){
    let arrLen = arr.length;

    for(let i =0; i<=arrLen-1; i++){

        for(let j=i+1; j<arrLen; j++){
            if(arr[i]+arr[j]===sum){
                return true;
            }
        }
    }
    return false;
}

    console.log(sumofTwo([4,2,3],6));