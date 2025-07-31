const add=document.getElementById("add")
const list=document.getElementById("todo-list")
const text=document.getElementById("text")
const tasks=document.getElementById("tasks")
const allbtn=document.getElementById("todo-all")
const actbtn=document.getElementById("todo-active")
const Donebtn=document.getElementById("todo-done")

let tasklist=[
    {id:1,task:"read",isActive:false},
    {id:2,task:"write",isActive:true}]

const loadTask=(props)=>{
    console.log(props,"pp")
    const {id,task,isActive}=props
    console.log(task,"taskkkk")
    let i=document.createElement("li")
    i.key=id;
    i.classList.add("list-it")
    let para=document.createElement("p")
    para.textContent=task
    i.appendChild(para)
    let card=document.createElement("div")
    let Abtn=document.createElement("button")
    Abtn.textContent=isActive?"Active":"Done";
    Abtn.addEventListener("click",()=>{
    tasklist=tasklist.map(each=>{
        console.log(id,"filterss")
        if (each.id===id){
            return {...each,isActive:!each.isActive}
        }
        return each
    })
    tasksload(tasklist)
})
    card.appendChild(Abtn)
    let dbtn=document.createElement("button")
    dbtn.textContent="Delete"
    dbtn.addEventListener("click",()=>{
    tasklist=tasklist.filter(each=>{
        console.log(id,"filterss")
        if (each.id===id){
            return false
        }
        return true 
    })
    tasksload(tasklist)
})
    card.appendChild(dbtn)
    i.appendChild(card)

    i.key=id
    list.appendChild(i)
    tasks.textContent=tasklist.length;
}

const deleteTask=(id)=>{
    tasklist.filter(each=>{
        if (each.id===id){
            return false
        }
        return true 
    })
    tasksload()
}

const tasksload=(loadlist)=>{
    console.log("taskload")
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
    for (const i of loadlist){
        console.log(i,"eachtask")
        loadTask(i)
    }
}


console.log(typeof(["k"]))
if (tasklist.length!==0){
    tasksload(tasklist)
}else{
    console.log("list is empty")
}


add.addEventListener("click",(event)=>{
    const k={id:tasklist.length+1,task:text.value,isActive:true}
    console.log("b",tasklist)
    tasklist.push(k)
    console.log("Af",tasklist)
    console.log(tasklist,text.value)
    
    tasksload(tasklist)
})

allbtn.addEventListener("click",()=>{
    tasksload(tasklist)
    allbtn.classList.add("act-btn")
    Donebtn.classList.remove("act-btn")
    actbtn.classList.remove("act-btn")
})

actbtn.addEventListener("click",()=>{
    allbtn.classList.remove("act-btn")
    Donebtn.classList.remove("act-btn")
    actbtn.classList.add("act-btn")
    let activetasks=tasklist.filter(each=>{
        if (each.isActive){
            return true
        }
        return false
    })
    tasksload(activetasks)
})

Donebtn.addEventListener("click",()=>{
    allbtn.classList.remove("act-btn")
    Donebtn.classList.add("act-btn")
    actbtn.classList.remove("act-btn")
    let donetasks=tasklist.filter(each=>{
        if (each.isActive){
            return false
        }
        return true
    })
    tasksload(donetasks)
})