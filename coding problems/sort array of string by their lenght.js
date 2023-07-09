

const sortArrayofStringByLenght = (arr)=>{

    let output = [];
    arr.forEach((item)=>{
    let lastIndexofOutput = output.length;
        
        if(output.length<1){
            output.push(item)
            // console.log('if')
        }else{
            // console.log('else')
            // console.log(lastIndexofO/utput)
            // console.log(output)
            item.length > output[0].length ? output.unshift(item): output.push(item)
        }
    })
    return output;
}


console.log(sortArrayofStringByLenght(['in','this','array','longest','word']))