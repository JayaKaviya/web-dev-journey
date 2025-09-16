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
function outer(){ 
    function inner(){
        console.log(count);
    } 
    var count=1; 
    return inner;
} 

outer()();