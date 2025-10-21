// // //abstraction in js
// //  //abstractio -> hide complexity
// //  //encapsulation -> provide security
// //  //burnfuel ko hamne Start() m call krliya ye h [ABSTRACTION] or hum aisa kuch kare 
// //  //ki hum burnfuel ko bahar access naa kr paye(security ) i s called [ENCAPSULATION]
class Car {
  #fuel = 100;

#burnFuel(){
    this.#fuel-=10;
}
Start(){
    this.#burnFuel();
    console.log("Car is starting");
}
}

const myCar = new Car();
myCar.Start()
console.log(myCar);
myCar.Start()
console.log(myCar);
myCar.Start()
console.log(myCar);

// //ABSTRACTION : means hiding complex implementation details and showing 
// //only the essential features to the used 
// //eg> array.sort() , we just use sort 7 and our work is done , we dont care about inner logic.

// //ENCAPSULATION : means wrapping data(properties) and methods(functions) together in a single unit.
// //usually a class or an object
// //restricting direct access
// //Use # for private class fields


class BankAccount {
    #balance = 100
    constructor(holderName, balance = 100) {
        this.holderName = holderName;
        this.#balance = balance;
    }
    deposit (balance){
        this.#balance+=balance;
    }
// using Set & Get 
    set Balance(balance){
        if (isNaN(balance)){
            console.error("Invalid Number");
            return;
        }
        console.log("Balance Set Sucessfully!");
        this.#balance = balance;
        
    }
    get getBalance(){
        return this.#balance
    }

}

let nikhilAcc = new BankAccount("Yadav Nikhil" , 220)
console.log(nikhilAcc);

//after depositing 100
nikhilAcc.deposit(100);
console.log(nikhilAcc);
nikhilAcc.Balance = 1000;
console.log(nikhilAcc.getBalance);
nikhilAcc.Balance






