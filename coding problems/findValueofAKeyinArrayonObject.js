
const arr =[{a:1,b:2},{a:11,c:3}];

function getPerticularValuesOfObj(arr,key){

    for(let i = 0; i<arr.length; i++){
    const keys = Object.keys(arr[i])
        let findRequired = keys.find(item => item === key )
        console.log(arr[i][findRequired])
    }
}

getPerticularValuesOfObj(arr,'a')