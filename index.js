const add=document.getElementById("add")
const list=document.getElementById("todo-list")
const item=document.createElement("li")
const text=document.getElementById("text")
add.addEventListener("click",(event)=>{
    console.log(text.value)
    item.textContent=text.value
    list.appendChild(item)
})