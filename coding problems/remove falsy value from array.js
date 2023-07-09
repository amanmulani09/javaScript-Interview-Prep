
const arr = [1,'true','false',false,0,null,'aman',1.44,undefined,'undefined',NaN];

function removeFalsyValues(array){
 if(array.length ===0 || !Array.isArray(array)) return -1
 let output = [];
 let falsyValues = [false, null, undefined, 0, NaN];
 array.forEach(item => !falsyValues.includes(item) && output.push(item))
 return output;
}

removeFalsyValues('')