//create an async operation to handle following functions 

//createOrder => DONE
//procceedToPayment => 
//showOrderSummery
//updateWalletBalance

const productCart = ['jeans','sunGlasses','shoes','shirts'];
const emptyCart = [];
const validDateCart = cart => cart.length === 0 ? false : true;

createOrder(productCart)
.then(function(productId){
    console.log(productId)
    // return procceedToPayment(productId)
})
// .then(function(paymentReceipt){
//     console.log(paymentReceipt);
//     return showOrderSummery(paymentReceipt)
// })
// .then(function(paymentStatusCard){
//     console.log(paymentStatusCard);
//     return updateWalletBalance(paymentStatusCard)
// })
.then((updatedBalance)=>{
    console.log(updatedBalance)
})



function createOrder(productCart){

    const pr = new Promise(function(resolve,reject){

    if(!validDateCart(productCart)){
        reject('Cart is empty please shop!')
    }else{
        const productId = `${productCart.length}d45sd`;
        setTimeout(()=>{
        resolve(productId);
        },2000)
        
    }
    })
    
    return pr;
    
}

// function procceedToPayment(productId){

//     return new Promise(function(resolve,reject){

//         if(productId.length === 0) reject('product id is empty');
//         const paymentReceipt = productId + 'paymentSuccess'
//         setTimeout(()=>{
//         resolve(paymentReceipt);
//         },1000);
//     })
// }

// function showOrderSummery(paymentReceipt){

//     return new Promise((resolve,reject)=>{

//         if(paymentReceipt.length === 0) return reject('payment failed')

//         setTimeout(()=>{
//             const orderSummeryCard = `${paymentReceipt[0]} items purchased thanks for shopping!`
//             resolve(orderSummeryCard);
//         },1200)
        
//     })
// }

// const updateWalletBalance = (paymentStatusCard)=>{

//     return new Promise((resolve,reject)=>{
//         if(paymentStatusCard.includes('fail')) reject('it is same as old');

//         setTimeout(()=>{
//             resolve('paise to khatam ho gye sare: 0: rs is remaning ')
//         },200)
//     })
// }