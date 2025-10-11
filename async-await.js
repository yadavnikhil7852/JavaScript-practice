//lets start
//using async await instead of promise chaining
//a-a is structured , clean , and easy to understand thats why we use it
function order(){
   return new Promise ((resolve)=>{
setTimeout(()=>{
    console.log("Ordering food...");
    resolve();
},1000)
   });
}
function cook(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("Cooking food...");
            resolve();
        },1000)
    });
}
function serve(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Serving food...");
            resolve();
        },1000)
    });
}
async function processorder(){
    await order();
    await cook();
    await serve();
    setTimeout(()=>{
console.log("Done");
    },1000)
    
}
processorder();
