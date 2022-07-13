const tasksArray = [
{text:"first task",active:true},
{text:"secund task",active:true},
{text:"third task",active:false},
{text:"forth task",active:true}
];
const ul = document.getElementById("ul");
const bntAct = document.getElementById("bntAct");
const bntAll = document.getElementById("bntAll");

bntAct.onclick = () =>{
   ul.innerHTML = "";
   for (const task of tasksArray){
      if(task.active){
         const li =  document.createElement("li")
         li.innerHTML = task.text
         ul.appendChild(li)
      }
   }
}
bntAll.onclick = () =>{
   ul.innerHTML = "";
   for (const task of tasksArray){
      
         const li =  document.createElement("li")
         li.innerHTML = task.text
         ul.appendChild(li)
      
   }
}