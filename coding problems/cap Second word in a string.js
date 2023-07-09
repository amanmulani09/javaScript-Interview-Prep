function capSecondWord(str){
    let newArr = '';

    for(let i =0; i<str.length; i++){
        if(i%2===0){
            newArr+= str[i].toUpperCase();
        } else{
            newArr+= str[i]
        }
        
    }
    return newArr;
    
}

console.log(capSecondWord('hellowordbaby'));