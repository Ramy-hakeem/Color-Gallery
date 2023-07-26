// cleration 
let ref=document.querySelector(".ref");
let container=document.querySelector(".container")

ref.addEventListener("click",randomcolor);

randomcolor ()



function randomcolor ()
{
    container.innerHTML=""
    for(i=0; i<10;i++){
        let random=`#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,0)}`
        let li=document.createElement("li");
        li.classList.add("col");
        container.appendChild(li);
        li.innerHTML=   `<div class="box" style="background:${random}"></div>
        <span class="col-val">${random}</span>`   
        li.addEventListener("click",() => copyText(random,li));
        
    }
};

function copyText(ele,li){
    li.querySelector(".col-val").innerHTML="Copied";
    navigator.clipboard.writeText(ele.toUpperCase());
    setTimeout(()=>li.querySelector(".col-val").innerHTML=ele,500);

}




