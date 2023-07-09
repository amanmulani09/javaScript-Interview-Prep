const cart =  [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🍫",
        price: 1.99, 
        type: "sweet",
        onSale: true
    },
    {
        item: "🥫",
        price: 1.99, 
        type: "savory",
        onSale: false
    },
    {
        item: "🍬",
        price: .89, 
        type: "sweet",
        onSale: false
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
        onSale: false
    }, 
    {
        item: "🍖",
        price: 3.99, 
        type: "savory",
        onSale: true
    }, 
]


function getTotalAmount(cart){

    return cart.reduce((acc,curr)=> acc+=curr.price,0)
    
}

console.log(getTotalAmount(cart))