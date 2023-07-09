const cart = [
    {
        product: "🍭",
        price: 2.99,
    },
    {
        product: "🍫",
        price: .99, 
    },
    {
        product: "🏡",
        price: 40000000
    },
    {
        product: "🧁",
        price: .99, 
    },
    {
        product: "📚",
        price: .99, 
    },
    {
        product: "⏰",
        price: 13.99, 
    }, 
    {
        product: "🍬",
        price: .89, 
    },
    {
        product: "🥎",
        price: 3.99,
    }, 
    {
        product: "🎸",
        price: 13.99, 
    }, 
    {
        product: "🎨",
        price: 23.99, 
    }, 
    {
        product: "💕",
        price: 120, 
    }, 
]

function sortbyPrice(cart){

    return cart.sort((a,b)=> a.price-b.price)
}


console.log(sortbyPrice(cart))