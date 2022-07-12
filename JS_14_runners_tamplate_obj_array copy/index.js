const postArray = [{user:"Isashar", text:"shabat shalom!",
comments:[{text:"first comment:shabat shalom Isashar!"},
{text:"second comment: shabat shalom motek!"}],
hidden:false},
{user:"Moshe", text:"shabat shalom ve chag shameh!!",
comments:[{text:"chag sameach Moshe!"},{text:"chage samech motek!"}],
hidden:false}];
const ulPost = document.getElementById("ul");
const bntPostAndComments = document.getElementById("bntPostAndComments");
const bntOnlyPosts = document.getElementById("bntOnlyPosts");

bntPostAndComments.onclick = () =>{
   ul.innerHTML = "";
   for (const post of postArray){
      if(!post.hidden){
         const liPost =  document.createElement("li")
         liPost.innerHTML = `${post.text}`
         ulPost.appendChild(liPost)
         const commentsList = document.createElement("ul")
         liPost.appendChild(commentsList)
         post.comments.forEach(
            comment => {
               const commentsListItem = document.createElement("li")
               commentsListItem.innerHTML = `${comment.text}`
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