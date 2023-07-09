Function.prototype.myApply = function(ctx={},args){
    if(typeof this !== 'function') throw new Error('please call it on valid function');
    if(!Array.isArray(args)) throw new Error('please pass valid arguments');
    ctx.fn = this;
    ctx.fn(...args)
}

