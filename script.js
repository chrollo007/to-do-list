const task=document.querySelector(".task");
const card=document.querySelector(".card");
const inbox=document.querySelector(".inbox")
const ul=document.querySelector(".ul")
const extra=document.querySelector(".extra");

const mynotes=[];

let flag=false;

function createCard(){
    const heading=document.createElement("input");
    heading.type="text";
    heading.id="Heading";

    const desc=document.createElement("input");
    desc.type="text";
    desc.id="desc"

    const save=document.createElement("input");
    save.type="submit";
    save.id="save";


    const dt=document.createElement("input");
    dt.type="date";
    dt.id="date"

    const pre=document.createElement("input");
    pre.type="input";
    pre.id="pre"
    card.appendChild(heading);
    card.appendChild(desc);
    extra.appendChild(dt);
    extra.appendChild(pre);
    card.appendChild(extra);
    const div=document.createElement("div");
   div.appendChild(save);
   card.appendChild(div)

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
                        event.stopPropagation();
                        card.style.display="flex";
                        flag=true;
                        card.innerHTML=" ";
                        extra.innerHTML="";
    });
    });
    });
   
}





task.addEventListener("click",(event)=>{
    if(flag==true){
        card.innerHTML=" ";
        extra.innerHTML="";
        return;
    }
    createCard();
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
