class Car {
    constructor(brand , color , milage){
        this.brand = brand;
        this.color = color;
        this.milage = milage;
    }
   start(){
    console.log(`${this.brand} is starting`);
   }


}
class ECar extends Car{
    constructor(brand , color , milage , charging){
        super (brand , color , milage);
           this.charging= charging;


    }
    start(){
        console.log(`${this.brand} is starting`);
        console.log(`${this.brand} is ${this.charging}% charged!`);
    }
}

 let myCar = new Car("BMW" ,"BLACk " , 5)
 console.log(myCar);
 myCar.start();
 let myECar = new ECar("TESLA" , "GREY" ,30 , 97)
 console.log(myECar);
 myECar.start()
