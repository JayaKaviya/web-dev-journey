const radius=[3,1,2,4]; 

const area=function(rad){
   return Math.PI*rad*rad;
} 

const perimeter=function(rad){
   return 2*Math.PI*rad;
} 

const diameter=function(rad){
   return 2*rad;
}

const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(
            logic(radius[i])
        );
    } 
    return output;
} 

console.log(calculate(radius,area));
console.log(calculate(radius,perimeter));
console.log(calculate(radius,diameter)); 

// #reduce 
const users = [
  { fn: "Alice", ls: "Smith", age: 25 },
  { fn: "Bob", ls: "Johnson", age: 30 },
  { fn: "Charlie", ls: "Brown", age: 22 },
  { fn: "David", ls: "Lee", age: 22 },
  { fn: "Eva", ls: "Davis", age: 35 }
];

// acc={ 22:2,25:1,30:1,35:1}
const output=users.reduce(function(acc,cur){
    if(acc[cur.age]){
       acc[cur.age]+=1;
    }
    else{
        acc[cur.age]=1;
    } 
    return acc;
},{}) 
console.log(output); 


const out=users.filter( x => x.age>25).map(x => x.fn);
console.log(out); 


const output2=users.reduce(function(acc,cur){
    if(cur.age>25){
       acc.push(cur.fn);
    }
    return acc;
},[]) 
console.log(output2); 
