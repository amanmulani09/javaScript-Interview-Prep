
function findWinner(stone){
    if(stone === 0) return null;
    if(stone %3 === 1){
        return 'Player B'
    }else{
        return 'Player A'
    }
}

// the looser is who pickup the last stone for ex stone = 3 then a pick 1, b pick 2, a pic 3 then the looser is a 
findWinner(7)
