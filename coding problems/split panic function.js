const panic = (str)=>{
    const strArr = str.split(' ');
    
    console.log(strArr,strArr.length)

    if(strArr.length < 1){
        return console.log(`${strarr.join('').toUpperCase()}!`)
    } else{
        return console.log(`${strArr.join(' 😱 ').toUpperCase()}`)
    }
}

panic('hello my jaan')