
let obj = {
    total:10,
    students:{
        pune:10,
        latur:{
            cocsit:20,
            shahu:19
        }
    }
}


function getObjInfo(obj,prop){
    let finalObject = obj;
    let properties = prop.split('.');
    properties.forEach(item=>{
        if(finalObject[item]){
            finalObject = finalObject[item]
        }else{
            finalObject = undefined;
        }
    })
        return finalObject;
}

console.log(students.latur.cocsit);