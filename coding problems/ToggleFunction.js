function toggle(...args) {
    let arr = [...args];
    let count = 0;
     
    return function() {
        console.log(arr.length)
        if (count == arr.length-1 ) {
            console.log(count,'count')
            count = 0
            return arr[count]
        } else {
            ++count
            console.log(count,'countelse')
            return arr[count]

        }

    }
}

const toggleOnOff = toggle('on', 'off');
console.log(toggleOnOff())
console.log(toggleOnOff())
console.log(toggleOnOff())




