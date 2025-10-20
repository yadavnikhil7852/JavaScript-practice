function BankAccount (holdersName , balance = 0){
    this.holdersName = holdersName
    this.balance = balance
    
    BankAccount.prototype.deposit = function(balance){
 this.balance+=balance;
    }
    BankAccount.prototype.withdraw = function(balance){
        this.balance-=balance;
    }


}
 let nikhilAcc = new BankAccount("nikhil" , 250)
 let RahulAcc = new BankAccount("Rahul" , 2500)
 let sahilAcc = new BankAccount("sahil" , 300)

 console.log(nikhilAcc);
 console.log(RahulAcc);
 console.log(sahilAcc);
