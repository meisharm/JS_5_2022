
const numArray = [1, 2, 3,4,6,7,8,9,10,11,12,13];
const ul = document.getElementById("ul");
const bnt = document.getElementById("bnt");

const arrayToEvan = function(arr){
   const evenArray = [];
   for(const element of arr ){
      if(element%2===0){
         evenArray.push(element)
      }
   }
   return evenArray
}

const evenArrayOut = arrayToEvan(numArray);

bnt.onclick = () =>{
   for (let num of evenArrayOut){

      const li =  document.createElement("li");
      li.innerHTML = num;
      ul.appendChild(li);
   }
   

   


}
