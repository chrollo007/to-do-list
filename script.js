const task=document.querySelector(".task");
const card=document.querySelector(".card");

const heading=document.querySelector("#Heading")

const save=document.querySelector("#save")
const inbox=document.querySelector(".inbox")
const ib=document.querySelector(".ib");




let flag=false;
save.addEventListener("click",()=>{
    ib.innerHTML=heading.value
    card.style.display="none";
    flag=false;
})
ib.addEventListener("click",(event)=>{
    event.stopPropagation();
    card.style.display="flex";
    flag=true;
})

task.addEventListener("click",(event)=>{
   event.stopPropagation();
    if(flag===false){
    card.style.display="flex";
    flag=true;
    }
})

card.addEventListener("click",(event)=>{
    event.stopPropagation();
    flag=false;
})

document.body.addEventListener("click",()=>{
    if(flag===true){
    card.style.display="none";
    flag=false;
    }
})
