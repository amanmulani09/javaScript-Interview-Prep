
function getParamsInArray(){

    let paramsArr =[];
    for(let i in arguments){
        paramsArr.push(arguments[i])
    }
    return paramsArr;
}

function callFunction(param1,param2,param3){

    const paramsArr = getParamsInArray(param1,param2,param3)
    return paramsArr;
}

callFunction('Hello', 'World', 123);