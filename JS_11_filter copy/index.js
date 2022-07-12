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
   const oddsArray = numArray.filter((element)=>{return element%2!==0;});
   //    const oddsArray = numArray.filter(element => element%2!==0);
   // const isOdd = (element)=>{return element%2!==0;}
   // const oddsArray = numArray.filter(isOdd);
   // const oddsArray = numArray.filter(function(element){return element%2!==0;});
   //    const oddsArray = numArray.filter((element)=>{return element%2!==0;});


   for (const num of oddsArray){
      
         const li =  document.createElement("li")
         li.innerHTML = num
         ul.appendChild(li)
      
   }
}
bntEvens.onclick = () =>{
   ul.innerHTML = "";
   const evenArray = numArray.filter((element)=>{return element%2===0;});

   for (const num of evenArray){
      
         const li =  document.createElement("li")
         li.innerHTML = num
         ul.appendChild(li)
      
   }
}