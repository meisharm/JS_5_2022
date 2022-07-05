const postArray = [{user:"Isashar", text:"shabat shalom!",comments:[{text:"shabat shalom Isashar!"},{text:"shabat shalom motek!"}],hidden:false}];
const ul = document.getElementById("ul");
const bntAct = document.getElementById("bntAct");
const bntAll = document.getElementById("bntAll");

bntAct.onclick = () =>{
   ul.innerHTML = "";
   for (const post of postArray){
      if(!post.hidden){
         const li =  document.createElement("li")
         li.innerHTML = `${post.text}`
         ul.appendChild(li)
         const commentsList = document.createElement("ul")
         li.appendChild(commentsList)
         post.comments.forEach(
            item => {
               const commentsListItem = document.createElement("li")
               commentsListItem.innerHTML = `${item.text}`
               commentsList.appendChild(commentsListItem);
            }
         )
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