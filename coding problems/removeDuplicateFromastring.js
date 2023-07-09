
// function removeDuplicatesFromString(str){
//     let final = '';
//         str.split('').forEach((item)=> final.includes(item)? final : final+=item)
//     return final;

// }

// console.log(removeDuplicatesFromString('amanmulani'))

/// remove characters using forLoop


function removeDuplicatesStr(str){
    let dupsremoved = '';
    for(let i = 0; i<str.length; i++){
        if(!dupsremoved.includes(str[i])){
            dupsremoved+=str[i]
        }
    }
    return dupsremoved;
}

console.log(removeDuplicatesStr('aabbaaraut'));