

function getMaxandMixwordInStr(str){

    let short = str.split(' ')[0];
    let longest = str.split(' ')[0];
    // console.log(str.split(' '));
    str.split(' ').forEach(item =>{
        if(item.length > longest.length){
        longest = item
        }
       
    })

     str.split(' ').forEach(item =>{
        if(item.length < short.length){
            console.log(item)
            short = item;
        }
       
    })
    
    return {longest,short}
}

console.log(getMaxandMixwordInStr('js is beautiful with the eye of love'))