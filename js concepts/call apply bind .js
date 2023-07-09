
const intro = function(commingFrom){
    return `hello ${this.name} welcome to ${this.city} thanks for comming from ${commingFrom}`
 };
 
 
 const obj1 = {
     name:'aman',
     city:'pune',
     DOB: 2002,
     age : function(){
         return new Date().getFullYear() - this.DOB
     }
     
 };
 
 const obj2 = {
     name:'sk',
     city:'beed',
     DOB:1999
 }
 
 // console.log(obj1.age.call(obj2));
 
 
 // this is how call works it calls an method with the multiple objects;
 // console.log(intro.call(obj1,'kaij'));
 // console.log(intro.call(obj2,'nanded'))
 
 
 // apply works as the same but it's syntax for passing the argument is different we use an array to pass argument to the bind function
 
 //ex . 
 
 // console.log(intro.apply(obj2,['goa']))
 
 
 // bind works same but rather than calling a function it return a function that will be invoke further in the program;
 
 const recentUser = {
     name:'naya hai vah',
     city:'P town baby',
     DOB: 2000
 }
 
 const getAgeofRecentUser = obj1.age.bind(recentUser);
 
 // console.log(getAgeofRecentUser());
 
 
 //practice of call/apply/bind
 
 
 //here this is the call
 
 //using the call we can call the function with the any object properity and it can be acccessed by this keyword
 // we can use one object's methods and call it on another object using the call function
 // we can also pass extra arguments to the function so that can be also accessed by the function
  const showPopupforNewUser1 = function(firstparak,secondparam,thirdparam){
     let greetMessage = `hello ${this.name} ${this.gender === 'male' ? 'sir': 'Madam'} thanks for comming from ${this.city}`
     alert(greetMessage)
     alert(firstparak)
 
     alert(secondparam)
     alert(thirdparam)
     
  }
 
 const registeredUser = {
    name:'himanshu',
    gender:'male',
    age:25,
    city:'delhi',
    greet:showPopupforNewUser1
 }
 
 const registeredUser2 = {
      name:'sunny',
    gender:'female',
    age:21,
    city:'goa'
 }
 
 // showPopupforNewUser1.call(registeredUser2,'euuuu')
 
 // registeredUser.greet.call(registeredUser2,'euuu');/
 
 // apply 
 
 // call and apply are the both same the difference between these two is how we pass the parameters after the object 
 // we pass the arguments in the form of array elements
 
 
 // registeredUser.greet.apply(registeredUser2,['euuu','rada',295])
 
 
 //bind the another bros in the jodi
 
 // bind works same as the call but rather than just calling the function is returns as refernce of the call and we can call it later
 
 // it accepts the arguments after this same like call not like apply in the array form oke
 const greetSunny = registeredUser.greet.bind(registeredUser2,['euuu','rada',295]);
 
 greetSunny();
 
 
 