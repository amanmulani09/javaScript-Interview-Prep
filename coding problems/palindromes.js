
function checkIsPalindromes(str){
    let reversed =  str.split('').reverse().join('');
    return str === reversed ? true : false;
}

checkIsPalindromes('woow')