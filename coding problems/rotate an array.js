const rotateArray = function(arr,index){
    let arrFromIndex = arr.slice(index,arr.length);
    let remainingArr = arr.slice(0,index);
    return [...arrFromIndex,...remainingArr]
}

rotateArray([1, 2, 3, 4, 5], 6); // returns [3, 4, 5, 1, 2]
// rotateArray(["apple", "banana", "cherry", "date"], 3); // ["date", "apple", "banana", "cherry"]
// rotateArray([1, 2, 3, 4, 5, 6], 4); // [5, 6, 1, 2, 3, 4]
// rotateArray([1, 2, 3, 4, 5], 7); // returns [4, 5, 1, 2, 3]