
// function sumOfArray(arr){

//     return arr.reduce((acc,value)=> acc+=value)
// }


function sumOfArray(arr){
    let sum =0;
    for(let i = 0; i<arr.length; i++){
        sum+=arr[i]
    }
        return sum;
    }
    
    const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];
    
    console.log(sumOfArray(studentCount))