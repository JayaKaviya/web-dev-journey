//async and await 

// async function x(){
//     return "Hello Kaviya";
// } 
// const dataPromise=x(); 
// console.log(dataPromise);
// dataPromise.then(res=>console.log(res)); 

const p=new Promise((resolve,reject)=>{
    resolve("Promise resolved");
})
async function x(){
    return p;
} 
const dataPromise=x(); 
console.log(dataPromise);
dataPromise.then(res=>console.log(res)); 


