const ul = document.getElementById("ul")
for (let i = 0; i <10;i++) {
   const li =  document.createElement("li")
   li.innerHTML = `this number is ${i}`
   ul.appendChild(li)
}