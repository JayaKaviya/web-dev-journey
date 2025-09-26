const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("P1 Resolved");
    }, 5000)
})
const p2=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("P2 Resolved");
    },3000)
}) 
const p3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject("P3 Resolved");
    },2000)
}) 

Promise.all([p1,p2,p3])
.then(res => console.log(res))
.catch(err => console.log("Error : ",err)); 

Promise.allSettled([p1,p2,p3])
.then(res => console.log(res))
.catch(err => console.log("Error : ",err)); 

Promise.race([p1,p2,p3])
.then(res => console.log(res))
.catch(err => console.log("Error : ",err));

Promise.any([p1,p2,p3])
.then(res => console.log(res))
.catch(err => console.log("Error : ",err));