
function debounce(fcn,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fcn,delay)
    }
}

const logicFunction = ()=> console.log('i will be called after 5 second');

const debouncedLogicFn = debounce(logicFunction,5000);

