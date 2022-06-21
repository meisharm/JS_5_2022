
const numArray = [1, 2, 3]

const ul = document.getElementById("ul")



const bnt = document.getElementById("bnt");
const bntInput = document.getElementById("inputBnt");


const arrayToEvan = function(arr){
   const evenArray = [];
   for(const element in arr ){
      if(element%2===0){
         evenArray.push(element)
      }
   }
   return evenArray

}





bntInput.onclick = function(){
   console.log("hi!")
   const newNum = +document.getElementById('number').value
   document.getElementById('number').value = ""
   numArray.push(newNum)

}
bnt.onclick = () =>{
   ul.innerHTML = "";
   for (const num of numArray){
      console.log(num)
      const li =  document.createElement("li")
      li.innerHTML = num
      ul.appendChild(li)
   }
   

   


}
