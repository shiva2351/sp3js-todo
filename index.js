const add=document.getElementById("add")
const list=document.getElementById("todo-list")
const text=document.getElementById("text")
const tasks=document.getElementById("tasks")
let id=0;
add.addEventListener("click",(event)=>{
    id+=1
    let i=document.createElement("li")
    i.textContent=text.value
    i.key=id
    list.appendChild(i)
    tasks.textContent=id
})