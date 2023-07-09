

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function getObjByKeys(obj,value){
    let key =  Object.keys(obj).find(item=> obj[key] === value)
    return key; 
}

console.log(getObjKey(gameNightFood,10))