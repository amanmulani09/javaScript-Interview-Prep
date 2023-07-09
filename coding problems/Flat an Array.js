
function flatAnArray(array){
    return array.reduce((acc,value)=>{

        if(Array.isArray(value)){
            acc = acc.concat(value)
        }else{
            acc.push(value)
        }

        return acc;
        
    },[])
}

console.log(flatAnArray([[1,2,[3]],4]))
