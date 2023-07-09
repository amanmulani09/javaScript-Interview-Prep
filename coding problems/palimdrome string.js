

function findPalindrome(str){
    let arr2 = str.split(' ').reverse().join(' ');
     console.log(arr2);
     console.log(str);
       
       return str === arr2 ? 'Palindrome' : 'non palindrome'
   }
   
   
   console.log(findPalindrome('hello aman welcome'))