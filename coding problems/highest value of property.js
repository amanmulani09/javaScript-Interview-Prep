

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function getHighestVotes(obj){
    let highestVotes = 0;

    for(let value in gameNightFood){
       if(gameNightFood[value] > highestVotes){
           highestVotes = gameNightFood[value]
           
           // console.log(value)
           
       }
    }

    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }

    const object = getKeyByValue(obj,highestVotes)
    return `The winner is ${object} with the votes of ${obj[object]}`
    
}

console.log(getHighestVotes(gameNightFood))