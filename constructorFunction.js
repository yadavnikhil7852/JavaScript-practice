//constructor function

function Student(name , age , passion){
   this.name = name
   this.age= age 
   this.passion = passion
   return this;

}
let s1 = new  Student("nikhil" ,20 ,"travelling/gaming")
let s2 = new  Student("garima" ,18 ,"designing/travelling")

console.log(s1);
console.log(s2);
