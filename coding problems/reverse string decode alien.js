const reverseString = str => str.split('').reverse().join('');

console.log(reverseString('hello'))

const decodeAlignLang = (str)=>{
    let strArr = str.split(' ');
    let result = strArr.map((item)=> reverseString(item))
    return result.join(' ')

}
console.log(decodeAlignLang('hello we are back on the earth!'));

Array.prototype.myMap = function(callback){
    let output = [];

    for(let i= 0; i<this.length; i++){
        output.push(callback(this[i],this))
    }
    return output;
}

[1,2,3]