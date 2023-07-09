Function.prototype.mycall = function(ctx={},...args){
    if(typeof this !== 'function') throw new Error('please call it on a valid function');

    ctx.fn = this;
    ctx.fn(...args);
    
}
const obj1 = {
    name:'aman'
}

const obj2 = {
    name:'himanshu'
}

const greet = function(){
    console.log('welcome ',this.name)
}

greet.call(obj1)
greet.mycall(obj2)
