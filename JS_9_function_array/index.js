
const numArray = [1, 2, 3]

const ul = document.getElementById("ul")



const bnt = document.getElementById("bnt");

const arrayToEvan = function(arr){
   const evenArray = [];
   for(const element in arr ){
      if(element%2===0){
         evenArray.push(element)
      }
   }
   return evenArray

}

const evenArray = arrayToEvan(numArray)

bnt.onclick = () =>{
   for (const num of evenArray){

      const li =  document.createElement("li")
      li.innerHTML = num
   ul.appendChild(li)
   }
   

   


}
