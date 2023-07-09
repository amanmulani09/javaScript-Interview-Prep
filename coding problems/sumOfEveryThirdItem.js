let items = [1,2,3,4,5,6,7,8,9,10,11,12];

function sumOfEveryThirdItem(arr){
    let sum = 0;
    let count=0;
    if(arr.length === 0) return ;

    for(let item in arr){
        ++count;
        if(count %3===0){
            // console.log(count)
            sum+=arr[item]
        }
    }
    return sum;
}

sumOfEveryThirdItem(items)