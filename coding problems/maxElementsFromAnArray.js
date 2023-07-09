// get max numbers required in array;

const maxElementFromAnArray = (arr,number=1)=>{
    // sorted the array high to low value;
    
    console.log([...arr].sort((a,b)=> b-a));

    // then slice the array by 0 to the number to be slice;
    
    return [...arr].sort((a,b)=> b-a).slice(0,number)
}

maxElementFromAnArray([1,2,3,4,5],2);