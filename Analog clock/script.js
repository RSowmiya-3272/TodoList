function addTask(){
    const input=document.getElementById("taskInput");
    const textBox=input.value.trim();
    if(textBox=="")return;

    
    const li=document.createElement("li");
    li.textContent=textBox;

    li.addEventListener("click",()=>{
        li.classList.toggle("completed");
    });
    const deletebtn=
        document.createElement("span");
        deletebtn.textContent="X";
        deletebtn.style.cursor="pointer";
        deletebtn.onclick=()=>
            li.remove();
        li.appendChild(deletebtn);
        document.getElementById("taskList").appendChild(li);
        input.value="";
    
}