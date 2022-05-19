const bnt = document.getElementById("bnt")
let counter = 0
bnt.onclick = function(){
counter = counter + 1
bnt.innerHTML = counter
}