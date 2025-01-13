const task=document.querySelector(".task");
const card=document.querySelector(".card");
const inbox=document.querySelector(".inbox")
const ul=document.querySelector(".ul")
const extra=document.querySelector(".extra");

const mynotes=[];

let flag=false;

function createCard(){



    if (card.querySelector("input")) return;
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

        const noteIndex = mynotes.length;

        ul.appendChild(li);
        btn.classList.add("ib");
        li.appendChild(btn).innerHTML=heading.value
        card.style.display="none";

        btn.dataset.index = noteIndex; 

        addnotes(heading.value,desc.value,dt.value,pre.value);
        flag=false;
    


        const ibs=document.querySelectorAll(".ib");
    
                  ibs.forEach(i=>{
                        i.addEventListener("click",(event)=>{
                        event.stopPropagation();
                        const index=event.target.dataset.index;
                        createCard();
                        if(flag==false){
                            flag=true;
                            heading.value=mynotes[index].Heading;
                            console.log(mynotes[index].Heading);
                            desc.value=mynotes[index].descrition;
                            dt.value=mynotes[index].date;
                            pre.value=mynotes[index].priority;
                            card.style.display="flex";
                        }
                    });
                });
   
    });
    const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
    card.style.display = "none";
    heading.value="";
    desc.value="";
    dt.value="";
    pre.value="";
    card.value="";
});

}





task.addEventListener("click",(event)=>{
    if(flag==true){
        card.style.display="none";
        return;
    }
   event.stopPropagation();
    if(flag==false){
    createCard();
    card.style.display="flex";
    flag=true;
    }
})

card.addEventListener("click",(event)=>{
    event.stopPropagation();
    flag=false;
})

document.body.addEventListener("click",()=>{
    if(flag==true){
    card.style.display="none";
    flag=false;
    return;
    }
})

