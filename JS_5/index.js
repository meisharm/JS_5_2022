const bnt = document.getElementById("bnt")
const body = document.getElementsByTagName("body")
let counter = 0
bnt.onclick = ()=>{
counter++;

bnt.innerHTML = !(counter%7)?"boom":counter;

}