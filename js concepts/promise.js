const cart = ["shoes","pants","kurts"];
const emptyCart = [];
const validateCart = cart => cart.length === 0 ? false: true;
//producer 
//create a promise object

createOrder(cart)
.then(function(orderId){
console.log(orderId)
return procceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(error){
console.log(error)
})

//js called this function and returned a promise;
function createOrder(cart){

    const pr = new Promise(function(resolve,reject){
        //crateOrder 
        //validateCart
        //orderId

        // return an error if the cart does not validate
        if(!validateCart(cart)){
            const err = new Error('cart is not valid!')
            //get the error in the catch(err)
            reject(err);
        }

        // logic for createOrder 

        const orderId = '124521';
        // return the result in the then part with the data
        if(orderId){
            //get the data in te then(orderId)
            setTimeout(()=>{
            resolve(orderId);
            },2000)
        }
        
        
    });

    return pr;
}

function procceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve('payment successful!')
    })
}