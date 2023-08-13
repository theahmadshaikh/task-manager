const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#delete");
const outputEl = document.querySelector("#list-container");
const form = document.querySelector("form");
 

// remove task

  const removeTask = (id)=>{
    // alert("remove")
    let tasks;
    if(localStorage.getItem("tasks")===null)
      tasks=[];
    else
      tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter((task)=>{
      return task.id !=id;
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
    getTasks();
  }




//get tasks
const getTasks=()=>{
  let tasks;
  if(localStorage.getItem("tasks")===null)
    tasks=[];
  else
  {
    tasks=JSON.parse(localStorage.getItem("tasks"));
  }
  const allTasks = tasks.map((task)=>
  {
    return `
    <li id="item">
            <span>${task.title}</span>
            <button onclick="removeTask('${task.id}')" id="delete">X</button>
          </li>
    `;
  }
  );
  // console.log(allTasks);
  outputEl.innerHTML=allTasks.join("");
}
getTasks();




//add task
const addTask = e=>{
  e.preventDefault();
  const task = inputEl.value.trim();
  if(task==="")
    alert("Please enter a task")
  if(task)
  {
    let tasks;
    if(localStorage.getItem("tasks")===null)
    {
      tasks=[];
    }
    else
    {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push({
      id:Date.now(),
      title:task
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));

  }
  inputEl.value="";
  getTasks();
  
}


form.addEventListener("submit",addTask);