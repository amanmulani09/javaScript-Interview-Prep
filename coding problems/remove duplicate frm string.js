

function removeDuplicates(str){
    let strArr = str.split(' ');
    let output = [];

    const removeDups = (str)=>{
        let result = [];
        str.split('').forEach(item=> !result.includes(item) && result.push(item));
        return result;
    }
    if(strArr.length < 2){
        output = removeDups(strArr)
    }else{
        output = strArr.map(item=> removeDups(item));
    }
    return output;
    
}

console.log(removeDuplicates('hello this is duplicate'))