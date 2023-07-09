Function.prototype.mybind = function(ctx={},...args){
    if(typeof this !== 'function') throw new Error('please call it on valid function');
    ctx.fn = this;

    return function(...args2){
        return ctx.fn(...args,...args2)
    }
}

let firstPerson = {
    age:10
}

let secondPerson = {
    age : 50
}

const isEligibleForVote = function(){
    if(this.age >=18){
        console.log('eligible for vote')
    }else{
        console.log('not eligible for vote')
    }
}

// const isObj1Eligible = isEligibleForVote.bind(firstPerson);
const isFirstPersonEligible = isEligibleForVote.mybind(secondPerson)
isFirstPersonEligible()