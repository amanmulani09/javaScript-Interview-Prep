// const arr =[2,3,4,5,6,7,8,10];

// const maxNumberInarray = arr.reduce((acc,curr)=>{
//      curr > acc ? acc = curr : acc = acc
//     return acc;
// },0)

// console.log(maxNumberInarray)

const userData = [
    {
    firstName:'aman',
    lastName:'mulani',
    age:22
    },
     {
    firstName:'h',
    lastName:'a',
    age:31
    },
     {
    firstName:'s',
    lastName:'r',
    age:32
    },
     {
    firstName:'r',
    lastName:'k',
    age:25
    },
    ]

const categorizedByAge = userData.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(categorizedByAge)

const firstNamesOfPeopleWithLessThan30Age = userData.reduce((acc,curr)=>{
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc;
},[])

console.log(firstNamesOfPeopleWithLessThan30Age)