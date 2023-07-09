const getNumberBetweenARange = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min+1);
}

console.log(getNumberBetweenARange(10,20))