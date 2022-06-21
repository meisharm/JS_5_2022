
const tasksArray = ["first task", "second task", "third task"]

const ul = document.getElementById("ul")



const bnt = document.getElementById("bnt");

bnt.onclick = () =>{
   for (const task of tasksArray){

      const li =  document.createElement("li")
      li.innerHTML = task
   ul.appendChild(li)
   }
   

   


}
