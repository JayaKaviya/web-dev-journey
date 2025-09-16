// CLOSURE 1
function x(){
    for (var i=1;i<=5;i++){ 
    
        function close(x) {
        //  setTimeout(function(){console.log(x);}, x*1000)  
        }  
        close(i);
    }
}
x(); 

// CLOSURE 2
function outer2(){ 
    function inner1(){
        console.log(count);
    } 
    var count=1; 
    return inner1;
} 

// outer()(); 
var closure2=outer2();
closure2(); 


// CLOSURE 3 - passing argument from outer scope
function outer(b){ 
    function inner(){
        console.log(count,b);
    } 
    var count=1; 
    return inner;
} 

// outer()(); 
var closure=outer("Hello world");
closure(); 


// CLOSURE 4 
function closest(){
    var a=20;
    function outer(b){ 
            function inner(){
                console.log(count,b,a);
            } 
            // let count=1; 
            return inner;
    } 
    return outer;
} 
let count=100;

// outer()(); 
var closure4=closest()("Hello world");
closure4();