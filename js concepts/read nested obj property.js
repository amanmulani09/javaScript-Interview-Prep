const obj = {
    A: {
      B: {
        C: {
          D: {
            E: 2,
          },
        },
      },
    },
  };
  
  function read(obj,prop){
      //creating an array of properties using split;
     let properties = prop.split('.');
      // assigning the base value of value as the object
      let value = obj;
  
      // iterating over the all properties passed
      for(let item in properties){
          console.log(value[properties[item]])
          // assigning the value to the last item of the array of properiees with each itration;
          if(!value || typeof value !== 'object'){
              return undefined
          }
          value = value[properties[item]]
      }
  
      return value;
  }
  
  console.log(read(obj, "A.B.C.D.E"));
  // return 2 as answer if E exists else return undefined/
  
  function sum(a){
  
      return function(b){
          return a+b;
      }
    }
  console.log(sum(10)(20)())