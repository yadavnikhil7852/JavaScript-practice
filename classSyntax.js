//.class syntax (ES6)

class Student {

    constructor(name , age , passion){
        this.name = name;
        this.age= age ;
        this.passion = passion;
        console.log("constructor function called!");

    }
    intro(){
        console.log(this.name , this.age ,this.passion);
    }
    
}
//new keyword is used to create instance of an object from a constructor function or class
let S1 = new Student("Garima",18 ,"Travelling/Gaming")//instances
console.log(S1);
let S2 = new Student("Nikhil",20 ,"Travelling/Gaming/coding")//instances
console.log(S2);
S1.intro()
