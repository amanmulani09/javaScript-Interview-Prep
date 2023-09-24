const people = [
    { name: 'Alice', age: 28,marks:20 },
    { name: 'Bob', age: 35,marks:20  },
    { name: 'Charlie', age: 28,marks:40  },
    { name: 'David', age: 42,marks:30  }
  ];
  
  
  const groupByReduce = function(arr,prop){
    if(!prop || prop.length <1) return arr;
  
      return arr.reduce((acc,val)=>{
  
        if(val.hasOwnProperty(prop)){
          acc[val[prop]] ? acc[val[prop]] = [...acc[val[prop]],val] : acc[val[prop]] = [val];
          return acc;
        }
        
      },{})
  }
  
  // groupByReduce(people,'age');
  
  const groupByMap = function(arr,prop){
    if(!prop) return arr;
  
    let resMap = new Map();
  
    arr.forEach(item =>{
      if(item.hasOwnProperty(prop)){
        if(resMap.has(item[prop])){
          resMap.get(item[prop]).push(item)
        }else{
          resMap.set(item[prop],[item])
        }
      }
      
    })
    
  return Object.fromEntries(resMap)
  }
  
  
  groupByMap(people,'age')