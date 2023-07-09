
console.log(
    [1,2,3,4,5,6,7,8,9,10].reduce((acc,value)=>{
       if(value % 2=== 0){
        acc+=value
       } 
        return acc;
        
    },0)
)