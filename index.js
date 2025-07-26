const add=document.getElementById("add")
const list=document.getElementById("todo-list")
const text=document.getElementById("text")
const tasks=document.getElementById("tasks")
let tasklist=[]
const loadTask=(props)=>{
    const {id,task,isActive}=props
    const dBtn=document.createElement("button")
    dBtn.textContent="DELETE";
    let i=document.createElement("li")
    i.key=id;
    i.classList.add("list-it")
    let para=document.createElement("p")
    para.textContent=task
    i.appendChild(para)
    let card=document.createElement("div")
    card.appendChild(dBtn)
    i.appendChild(card)

    i.key=id
    list.appendChild(i)
    tasks.textContent=id
}

const tasksload=()=>{
    for (const i in tasklist){
        loadTask(i)
    }
}

add.addEventListener("click",(event)=>{
    tasklist.push({id:tasklist.length+1,task:text.value,isActive:false})
    console.log(tasklist)
    tasksload()

})



console.log(typeof(["k"]))
if (tasklist.length!==0){
    
}else{
    console.log("list is empty")
}