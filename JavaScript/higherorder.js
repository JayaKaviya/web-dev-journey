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