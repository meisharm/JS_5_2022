const bnt = document.getElementById("myButton");
let counter = 0;
bnt.onclick = function(){
    counter++;
    bnt.innerHTML = counter;

}

if(age>18){
    console.log("access allowed")
}else{
    console.log("access denied")
}

(2>3)?5:"yes"