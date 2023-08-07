// Big O Notation means measure the performance of the algorithms using time and space complexity

let funnyNum = (array)=>{

    for(let i =0; i<array.length; i++){
        if(i=== 3) return array[i]
    }
}

const funnyNumOptimized = (array)=> array[3] // the more optimized way

const nums = [1,2,3,4,42];
// funnyNum(nums)


//-----------------------------------------

// it also depends on machine to machine how perticular code is slow or fast 

// we can measure it based on operations or how many time a perticular operation is going


let funnyBunny = (array)=>{ // it performs the 4 operations

    for(let i =0; i<array.length; i++){
        if(i=== 3) return array[i]
    }
}

const funnyBunnyOptimized = (array)=> array[3] // just have one operation

//---------


//example


function someOperations(n){
    return (n * (n+5))/2 // same 3 operations for every input so O(1) complexity
}

// if code has constant operations on any input then is has the o(1) complexity



//------------------

function goingUpDown(n){
    //2n + 3 operations O(n)
    for(let i =0; i<n; i++){
        console.log(i)
    };

    for(let i =n; i>=0; i--){
        console.log(i)
    }

    return n*n;
    
}

//it will increasing in the constant way as per the user input 


//printBoth

function printBoth(n){//it is a bad time complexity when in term of algorithms
    // here the operations increase n*n operations it has time complexity of O(n)2(square)
    for(let i =0; i<n; i++){
        for(let j =0; j<n; j++){
            return (i,j)
        }
    }
}

// time complexities 
// O(1) => when the operations are constant for any input; 1+1+1+1+
// O(n) => when the operation incrase constant with the respectily to the input 2+4+6+8+10 
// O(n*2) O(n)squre => when the operations increased widely based on input and are not constant 2+ 4+ 8 + 16+ 32+ 64 EEEEEEUU