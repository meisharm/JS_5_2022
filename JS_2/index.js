const bnt = document.getElementById("myButton");
let counter = 0;
bnt.onclick = function(){
    counter++;
    bnt.innerHTML = counter;

}