
function formatMoney(money){
    let formattedMoney;
    
    const totalMoney = money.toString().length;
    console.log(totalMoney)
        return '$' + Number(money).toFixed(2)
        
    }
    
    formatMoney(100000)