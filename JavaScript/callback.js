

setTimeout(
    function(){
        console.log("Callback func executed after 5 sec");
    } , 5000
) 

function x(y){
    console.log("x"); 
    y();
} 

x(function y(){ 
    console.log("y");
});