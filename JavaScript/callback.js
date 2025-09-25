

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

// closure & event listener
function attachEventListener(){
    let count=0;
    document.getElementById("clk").addEventListener("click",function x(){
        console.log("Button clicked", ++count);
    })
} 
attachEventListener();