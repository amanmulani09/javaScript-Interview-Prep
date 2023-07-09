
function checkAnagram(str1,str2){
    let strArr1 = str1.split('').sort().join('');
    let strArr2 = str2.split('').sort().join('');
    return strArr1 === strArr2 ? true: false;
 }
 
 console.log(checkAnagram('inch','chin'))