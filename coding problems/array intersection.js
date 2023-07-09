
function arrayIntersection(arr1,arr2){
    if(arr1.length === 0 || arr2.length ===0) return;
    let mergedArray = [...arr1,...arr2]
    const removedWithSet = new Set(mergedArray)
    console.log(removedWithSet);;
}

arrayIntersection([1,3,4,5,2,5],[11,2,5,8,7,4]);