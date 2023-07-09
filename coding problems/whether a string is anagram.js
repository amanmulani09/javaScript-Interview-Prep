
function checkAnagram(str){
    let alphabates = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let smallString = str.toLowerCase();

    for(let alphabate of alphabates){
        if(!smallString.includes(alphabate)) return false
    }
    return true
}

let str = 'A Quick brown fox jumps over the lazy dog'
console.log(checkAnagram(str) ? 'yes' : 'no')