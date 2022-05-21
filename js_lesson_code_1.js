/*
what is a browser?
 */


/* 
what is a web console?
*/


/* 
variables vs values
*/



























/* variables type 
number  // 2 3.4 -4.5
string // "hello world" 'yes' `my name is ${userName}`
boolean // true or false
null // no value
undefined // no assignment yet
*/





/* declaration 
let - if we need too reassign later. block scope.
const - if we don't need to reassign later. block scope.
var - old, scope problem (function scope)
no declaration - scope problem (global scope)
*/
let userName; // declaration

userName = "shimon";


let age =17 // declaration and assignment




// 2+2  "str1"+"str2"  name[0] / % *  age++ age+1
userName.toLowerCase()
userName.trim()
userName.indexOf("o")
userName.slice(3,7)
userName.replace("on","shon")
console.log("hello " + userName)
// 

let isOnLine = false

console.log(3<2)

console.log(1<2&&2<3)


// 


if(age>18){
    console.log("access allowed")
}else{
    console.log("access denied")
}



// 


for (let i = 0; i <10; i++) {   
    console.log(i)
}




// 


const add2 = function(number){
    return number+2
}

5<2 && 8>2

!3<2

!true

!false

25%7

let counter = 0

counter = counter +1 

counter += 4

counter++

counter

++counter

counter

counter+=13

"sfhgbflsjh"+="nsknsdv"

let myStr ="sfhgbflsjh"; mystr+="nsknsdv";


"1"+=1


13<21


let myBool = 13<21; myBool

typeof myBool


let myBool1 = false;let myBool2 = true;myBool1&&myBool2

myBool1||myBool2

3<2 || 2>1

3<2 && 2>1

!3<2

!true

!false

userEmail = null
typeof userEmail
'object'