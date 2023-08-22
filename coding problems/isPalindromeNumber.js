export const isPalindrome = (number) => {
    const reversedNum = number.toString().split('').reverse().join('');
   
   return number === Number(reversedNum)
   }