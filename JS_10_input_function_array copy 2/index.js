const numArray = [1, 2, 3];
const ul = document.getElementById("ul");
const bnt = document.getElementById("bnt");
const bntInput = document.getElementById("inputBnt");
bntInput.onclick = function(){
   console.log("hi!")
   const newNum = +document.getElementById('number').value
   document.getElementById('number').value = ""
   numArray.push(newNum)

}

/*
צריך לסכום את אברי המערך
צריך להוסיף לרשימה
*/
bnt.onclick = () =>{
   ul.innerHTML = "";
   let sum = 0;
   for (const num of numArray){
      sum += num
      console.log(num)
      const li =  document.createElement("li")
      li.innerHTML = num
      ul.appendChild(li)
      
   }
   const liSum =  document.createElement("li")
   liSum.innerHTML = sum
   ul.appendChild(liSum)
   
}
