

const removeFromString = function(str,word){
    let strWithRemoved = str.split(' ').filter((item)=> item !== word);
    return strWithRemoved.join(' ');
}
;
console.log(removeFromString('hello how are you','you'));