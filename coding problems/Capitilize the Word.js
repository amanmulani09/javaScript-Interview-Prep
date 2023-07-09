

const capitilizeSingleWord= (str)=>{
    return str[0].toUpperCase() + str.slice(1)
}
console.log(capitilizeSingleWord('hello'))

const capitilizeFirstWordInString = str=>{


    let arrofStr = str.split(' ');
    let stringWithCapitilizeLetter = arrofStr.map((item)=>{
        return capitilizeSingleWord(item);
    })
    return stringWithCapitilizeLetter.join(' ');
    
}

console.log(capitilizeFirstWordInString('hello world baby'))