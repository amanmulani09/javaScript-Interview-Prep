
// function flattenArr(arr,depth=1){
//     if(depth === 0) return arr;
//     let result = [];
//     for(let item in arr ){
//         // here checking the element is an array or not
//         if(Array.isArray(arr[item])){
//             // here we recurively calling the function and storing the result by spreading each element in the result array;
//             result.push(...flattenArr(arr[item],depth-1))
//         }else{
//             result.push(arr[item])
//         }
//     }
//     return result;
// }


function flatArrwithDept(arr,depth = 1){
    if(depth === 0) return arr;

    let flatArrresult = [];
    for(let ele of arr){
        // console.log(ele)
        if(Array.isArray(ele)){
            flatArrresult.push(...flatArrwithDept(ele,depth-1))
        }else{
            flatArrresult.push(ele)
        }
    }
    return flatArrresult
}

flatArrwithDept([1,2,3,[4,5,[6,7],8],9],1)