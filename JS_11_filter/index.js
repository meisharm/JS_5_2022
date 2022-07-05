const numArray = [1, 2, 3];
const ul = document.getElementById("ul");
const bntOdds = document.getElementById("bntOdds");
const bntEvens = document.getElementById("bntEvens");
const inputNumber = document.getElementById("inputNumber");
const bntInput = document.getElementById("inputBnt");
bntInput.onclick = function(){
   const newNum = +inputNumber.value
   inputNumber.value = ""
   numArray.push(newNum)
}
bntOdds.onclick = () =>{
   ul.innerHTML = "";
   for (const num of numArray){
      if(num%2 !== 0){
         const li =  document.createElement("li")
         li.innerHTML = num
         ul.appendChild(li)
      }
   }
}
bntEvens.onclick = () =>{
   ul.innerHTML = "";
   for (const num of numArray){
      if(num%2 === 0){
         const li =  document.createElement("li")
         li.innerHTML = num
         ul.appendChild(li)
      }
   }
}