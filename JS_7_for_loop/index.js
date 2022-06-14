const ul = document.getElementById("ul")
for (let i = 0; i <10;i++) {
   const il =  document.createElement("li")
   il.innerHTML = `this number is ${i}`
   ul.appendChild(il)
}