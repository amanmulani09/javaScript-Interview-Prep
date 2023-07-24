//using the built in feature


function findPalindrome(num){
    if(num <0) return false;
    let reversNum = +num.toString().split('').reverse().join('')
    return num === reversNum;
}
findPalindrome(121);