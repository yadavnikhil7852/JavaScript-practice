//factory function
 one function is used to create many objects

 function student(name , age , mobile_no){
     return{
   name: name,//properrty
     age: age,
     mobile_no: mobile_no ,
     indroduceMyself: function () { //method
         console.log(`hello my name is ${this.name} , my age is${this.age} , my mobile number is ${this.mobile_no}`);
     }}
 }
  let s1 = student("Roshni" ,20 , 8368918725);
  let s2 = student("rahul" ,20 , 7863456745);
s1.indroduceMyself()
console.log(s1);
  console.log(s2);
