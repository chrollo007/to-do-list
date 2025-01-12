const task=document.querySelector(".task");
const card=document.querySelector(".card");

const heading=document.querySelector("#Heading")

const save=document.querySelector("#save")
const inbox=document.querySelector(".inbox")
const ib=document.querySelector(".ib");

const desc=document.querySelector("#desc");
const dt=document.querySelector("#date");
const pre=document.querySelector("#pre");

const mynotes=[];

function notes(Heading,descrition,date,priority){
    this.Heading=Heading;
    this.descrition=descrition
    this.date=date
    this.priority=priority
}

function addnotes(Heading,descrition,date,priority){
    const save=new notes(Heading,descrition,date,priority);

    mynotes.push(save);
}

let flag=false;
save.addEventListener("click",()=>{
    ib.innerHTML=heading.value
    card.style.display="none";
    addnotes(heading.value,desc.value,dt.value,pre.value);
    mynotes.forEach((mynote)=>{
        console.log(mynote);
    })
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
