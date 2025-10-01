//async and await 

// async function x(){
//     return "Hello Kaviya";
// } 
// const dataPromise=x(); 
// console.log(dataPromise);
// dataPromise.then(res=>console.log(res)); 


//ex 2
// const p=new Promise((resolve,reject)=>{
//     resolve("Promise resolved");
// })
// async function x(){
//     return p;
// } 
// const dataPromise=x(); 
// console.log(dataPromise);
// dataPromise.then(res=>console.log(res));  


//ex 3

const pr1=new Promise((resolve,reject)=>{
     setTimeout(()=>resolve("Promise1 resolved after 5s"),5000);
}) 
const pr2=new Promise((resolve,reject)=>{
   setTimeout(()=>resolve("Promise2 resolved after 10 s"),10000);
}) 
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
async function handlepromise() {

    const res=await pr1; 
    console.log("Namaste 1");
    console.log(res); 

    const res2=await pr2; 
    console.log("Namaste 2");
    console.log(res2);
    
} 
handlepromise();



// example 3 - external api call
api2="https://api.github.com/users/JayaKaviya";

async function handle2(){
    
    const data=await fetch(api2);
    //FETCH ALWAYS RETURNS THE PROMISE, THAT PROMISE HAS TO BE RESOLVED SO NEED AWAIT/ THEN ,
    // THEN THE response is in readeable stream it has to be converted to json format 

    const jsonval=await data.json();
    console.log(" Github Jaya Kaviya in async example :",jsonval);
    
}
handle2();