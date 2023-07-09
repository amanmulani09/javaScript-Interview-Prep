let itemArr = [1,3,5,6,7,3];

function isContainsDups(arr){
    let temp = [];

    for(let item in arr){
        if(temp.includes(arr[item])){
        return 'contains dups'
    }else{
            temp.push(arr[item])
    }
}
}
console.log(isContainsDups(itemArr))