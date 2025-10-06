
const input=document.getElementById("input");
const btn=document.getElementById("btn");
const ul=document.getElementById("list");

btn.addEventListener('click',function(){
    const li=document.createElement("li");
    li.textContent=input.value;
    ul.appendChild(li);
    input.value="";
})