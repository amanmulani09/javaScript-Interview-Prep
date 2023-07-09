
function awardBonus(num){
    for(let i = 0; i<=num; i++){
        
        if(i%5===0 && i%3=== 0){
             console.log('jackpot one million',i);
        } else if(i%5 ===0){
             console.log('$100000 bonus',i);
        } else if( i%3 == 0){
             console.log('vacation!',9);
            
        } else{
            console.log(':(',i)
        }
    }
}

awardBonus(100)