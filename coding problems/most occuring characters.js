

function findMostOccuringChars(string){
    if(string.length === 0) return -1;
      let frequency = {};
      let str = string.toLowerCase();

    for(let i =0; i<str.length; i++){
        let char = str[i]
        if(frequency[char]){
            frequency[char]++
        }else{
            frequency[char] = 1
        }
    }
    console.log(frequency)

    let maxChar = '';
    let maxCount = 0;

    for(let key in frequency){
        if(frequency[key] > maxCount){
            maxChar = key;
            maxCount = frequency[key]
        }
    }
    return {
        maxChar,
        maxCount
    }
}

function findMostOccuringCharsReduce(str){

    let string = str.toLowerCase();
    let strArr = string.split('');

    const frequentChars = strArr.reduce((acc,value)=>{
        acc[value] ? acc[value]++ : acc[value] =1 
        return acc;
    },{})


    let maxChar = '';
    let maxCount = 0

    for(let key in frequentChars){
        if(frequentChars[key] > maxCount){
            maxChar = key;
            maxCount = frequentChars[key]
        }
    }
    return {
        maxChar,
        maxCount
    }
}

findMostOccuringCharsReduce('abbccc')