3.Promise chaining is a technique in JavaScript where you connect multiple
  //  .then() methods in a sequence to handle asynchronous operations one after another.
  function OrderFood(){
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
         const orderfood = true ;
        if(orderfood) resolve("Food is Ordered")
          else reject("food not ordered yet")
      },1000);
    })
  }
  function CookFood(){
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
         const cookfood = true ;
        if(cookfood) resolve("Food is cooked")
          else reject("food is not cooked yet")
      },1000);
    })
  }
  function ServeFood(){
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
         const servefood = true ;
        if(servefood) resolve("Food is served")
          else reject("food not  served yet")
      },1000);
    })
  }
  OrderFood()
  .then((message1)=>{
    console.log(message1);
    return  CookFood();
  })
  .then((message2)=>{
    console.log(message2);
    return ServeFood();
  })
  .then((message3)=>{
    console.log(message3);
    console.log("Enjoy your meal!")
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  
