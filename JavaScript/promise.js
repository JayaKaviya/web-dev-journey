const api="https://api.github.com/users/JayaKaviya" 

const user=fetch(api)

console.log(user);

user.then (function(data){
  console.log("data :",data);
}
)

user.then(res => res.json())
  .then(data => console.log("Data ",data))
  .catch(err => console.error("Error " ,err)); 


// Response 
// Data  {login: 'JayaKaviya', id: 109425248, 
//     node_id: 'U_kgDOBoWyYA', 
//     avatar_url: 'https://avatars.githubusercontent.com/u/109425248?v=4', gravatar_id: '', …}  


//Example 2

const cart=['shoes','pants','shirts']

//Consumer
const promise=createOrder(cart)

//promise chaining
promise
    .then(function(x){
        console.log("ORDER ID ",x);
        return x;
    })
    .then(function(){
        return proceedToPayment(x);
    }) 
    .then(function(res){
     console.log("PAYMENT STATUS",res);
    })
    .catch(function(err){
        console.log("ERROR", err.message);
    })


//Producer
function createOrder(cart){ 

    var pr=new Promise(function(resolve,reject){
        if(!ValidityState(cart)){
            var err=new Error("Cart is not valid"); 
            reject(err);
        }
        else{          
            const orderID="12345";
            resolve(orderID);
        }
    }) 
    return pr;

} 
function ValidityState(cart){
    return true;
    //  return false;
} 

function proceedToPayment(orderID){
    return  new Promise(function(res,rej){
        res("Payment successful");
    })
}


