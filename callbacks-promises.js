 //this is callbacks and promises not async and await
 /*console.log("Hello Async/Await")
console.log("snippets are Active");
//start Async/Await
//we will do it on tomorrow  morning after completing cyber security & lawss

//ques 1
//Write a function greetUser(name, callback) that prints "Hello <name>"
//  and then executes the callback.
 function user (name , callback){
callback(name);
}

function greet(name){
    console.log(`Hello ${name}`);
    console.log("welcome to js");
}
user("nikhil" , greet);

//2.Write a function calculate(a, b, callback) that adds two numbers and 
// passes the result to the callback.
;
function numbers ( num1 , num2 , callback){
    console.log("Function one Executes..")
callback( num1 , num2 )
}
 function sum (num1 , num2) {
    console.log(num1 + num2);
 }
numbers(10 ,20 , sum);


 //Write a function that prints "Start" immediately, then 
 // after 2 seconds prints "Done!" using setTimeout.

 const PrintMessage = ()=>{
console.log("Start");
setTimeout(()=>{
    console.log("Stop");
},2000)
 };
 PrintMessage();

 //Write a function processArray(arr, callback) that goes through
 //  each element of the array and applies the callback function.

 function ProcessArray (arr , callback){
for(let i= 0 ; i<arr.length ; i++){
      callback(arr[i])
}
 };
  function double(num){
    console.log(num*2);
  };

  ProcessArray([1,2,3,4,5] , double);

  //Write a function that prints the current time every second using setInterval.
//Stop it after 5 seconds using clearInterval.
 
function ShowTime (){
  let timer = setInterval(()=>{
    let now = new Date();
    console.log(now.toLocaleTimeString());
  } ,1000);

  setTimeout(()=>{
    clearInterval(timer)
    console.log("Stopped ⏹️")
  } , 5000);
}
ShowTime();


//Callback hell , nested callbacks 

function step1(callback){
setTimeout(()=>{
  console.log("Task 1 done");
  callback();
} , 1000)
};
  
function step2 (callback){
  setTimeout(()=>{
    console.log("Step 2 done");
    callback();
  },1000)
};

function step3(callback){
  setTimeout(()=>{
    console.log("Step 3 done");
    callback();
  },1000)
};

step1(()=>{
  step2(()=>{
    step3(()=>{
      console.log("All steps completed");
    });
  });
});
 
//Create a countdown from 5 → 1 → “Happy New Year!” using setTimeout() and callbacks.
  function countdown (num , callback){
    setTimeout(()=>{
      console.log(num);
      callback();
    },1000);
  } 
  countdown(5 ,()=>{
    countdown(4,()=>{
    countdown(3 ,()=>{
    countdown(2 ,()=>{
    countdown(1 ,()=>{
    setTimeout(()=>{
      console.log("Happy New Year");
    },1000)
  });
  });
  });
  });
  });

//Example 1: Basic Promise

let myPromises = new Promise( (resovle , reject)=>{
 let Success = true ;
 if(Success){
  resovle("Promise Resolved")
 }
 else{
  reject(" Promise Rejected")
 }
});
myPromises
.then((msg)=> console.log(msg))
.catch((err)=>console.log(err))
.finally(()=>console.log("Done!"))
 
// Async task with promises

function fetchData(){
  return new Promise((resolve , reject)=>{
 setInterval(()=>{
  const success = true ;
  if (success) resolve("Data Fetched Successfully!")
    else reject("Data Cannot be fetched!")
 },2000)
  });
}
 fetchData()
 .then((msg)=>console.log(msg))
 .catch((err)=>console.log(err))
 .finally(()=>{
return new Promise((resolve)=>{
 setTimeout(()=>{
  console.log("Operation complete ");
  resolve();
 },1000)
})
 },)


 // Create a promise that resolve if marks > 50 , otherwise rejects
 //create a promise that simulates loading data (2s delay)
 //add.then() , .catch(), and .finally() handlers to it
 function Passfail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const marks = 55;
      if (marks > 50) {
        resolve("Admission Criteria is Fulfilled");
      } else {
        reject("Not eligible");
      }
    },);
  });
}

Passfail()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Admission Complete!");
        resolve();
      }, 1000); // 1-second delay before logging "Operation Complete!"
    });
  });
  */

  //3.Promise chaining is a technique in JavaScript where you connect multiple
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
  
