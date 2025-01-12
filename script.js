const task=document.querySelector(".task");
const card=document.querySelector(".card");

const heading=document.querySelector("#Heading")

const save=document.querySelector("#save")
const inbox=document.querySelector(".inbox")

const desc=document.querySelector("#desc");
const dt=document.querySelector("#date");
const pre=document.querySelector("#pre");

const ul=document.querySelector(".ul")


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
    const li=document.createElement("li");
const btn=document.createElement("button")
    ul.appendChild(li);
    btn.classList.add("ib");
    li.appendChild(btn).innerHTML=heading.value
    card.style.display="none";
    addnotes(heading.value,desc.value,dt.value,pre.value);
    flag=false;


    const ibs=document.querySelectorAll(".ib");

ibs.forEach(i=>{
    i.addEventListener("click",(event)=>{
        console.log("hello")
    event.stopPropagation();
    card.style.display="flex";
    flag=true;
});
});
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
