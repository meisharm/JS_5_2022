const postArray = [{user:"Isashar", text:"shabat shalom!",comments:[{text:"shabat shalom Isashar!"},{text:"shabat shalom motek!"}],hidden:false}];
const ul = document.getElementById("ul");
const bntPostAndComments = document.getElementById("bntPostAndComments");
const bntOnlyPosts = document.getElementById("bntOnlyPosts");

bntPostAndComments.onclick = () =>{
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
bntOnlyPosts.onclick = () =>{
   ul.innerHTML = "";
   for (const post of postArray){
      
         const li =  document.createElement("li")
         li.innerHTML = post.text
         ul.appendChild(li)
      
   }
}