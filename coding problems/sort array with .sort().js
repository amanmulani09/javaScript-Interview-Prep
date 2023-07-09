let items = [-3,-6,-5,-1,0,1,2,4,6];

function sortArr(array){
    if(array.length === 0) return -1;
    let finalOutput = [];
    let nextIndex = 1;

    for(let item in items){
        if(items[nextIndex] > items[item]){
            finalOutput.push(items[item])
        }else{
            finalOutput.unshift(items[item])
        }
        nextIndex++
    }
    return finalOutput;

}

sortArr(items)