const bnt = document.getElementById("bnt")
const body = document.getElementsByTagName("body")
let counter = 0
bnt.onclick = ()=>{
counter++;
if (counter%7!==0){
    bnt.innerHTML = counter;
}else{
    bnt.innerHTML = "boom!";
}
}