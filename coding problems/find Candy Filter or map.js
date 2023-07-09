const store =  [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
    },
    {
        item: "🍫",
        price: 1.99, 
        type: "sweet",
    },
    {
        item: "🥫",
        price: 1.99, 
        type: "savory",
    },
    {
        item: "🍬",
        price: .89, 
        type: "sweet",
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
    }, 
    {
        item: "🍖",
        price: 3.99, 
        type: "savory",
    }, 
]


function getCandytoSell(store){
    let candies = store.filter(product => product.type === 'sweet')
    return candies.map(product => {
        return {
        item: product.item, price:product.price }
                                  })
}

console.log(getCandytoSell(store))