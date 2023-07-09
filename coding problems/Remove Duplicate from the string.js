
function removeDuplicate(str){

    let strArr = str.split(' '); 
    let output = new Set(strArr)
    return output;
    }
    
    console.log(removeDuplicate('hello world this world is very kind the tech world is growing'));