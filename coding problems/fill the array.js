

function fillTheArray(array){
    if(array.length === 0) return;

    //get the max number till 
    
    let sortedArray = array.sort((a,b)=> a-b)
    let max = sortedArray[sortedArray.length-1];
    console.log(max)
    let result = [];
    for(let i = 1; i<=max;i++){
        if(!array.includes(i)){
            result.push(i)
        }
    }
    return result;

    
}
fillTheArray([1,10,5,6,8,3,11,13,17,19])