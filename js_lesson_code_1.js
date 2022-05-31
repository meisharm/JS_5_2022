


/*
what is a browser?
*/


// https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf


/* 
what is a web console?
read evaluate print loop
*/


/* adding js code to html 

<script>
document.getElementById("elmId").innerHTML = "My First JavaScript";
</script>

 */



/* adding js code to html

<script src="index.js"></script>

*/






/* 
variables vs values
*/




/* 
named memory location
*/



/* allowed variable names - (identifiers) 

let user1 = "moshenko"
let _user1 = "user1"
let $_user1 = "user1"
no spaces allowed
the first character can not be a digit

*/



/* variables type 
number  // 2 3.4 -4.5
string // "hello world" 'yes' `my name is ${userName}`   template literals for strings
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

// סקופ של משתנה - איפה מכירים את המשתנה איפה אפשר לראות אותו לגשת אליו לשנות אותו
{
    let number_let = 10;
    console.log(number_let)
}



/* 

{
let number_let = 10;
console.log(number_let);
}   scope in the block

{
const number_const = 10;
console.log(number_const);
}     scope in the block

{
var number_var = 10;
console.log(number_var);
}    scope is global (no function)

{
number_non = 10;
console.log(number_non);
}       scope is global


*/



let userName; // declaration

userName = "shimon"; // assignment


let age = 17 // declaration and assignment
/* numbers
let score = 0; // declaration and assignment
score++;    //עושה כמה דברים: מחזיר, מוסיף ושם מחדש
score += 5
score -= 3
score --
2+3*5   סדר פעולות חשבון
13%3 
2+13%3
3*13%3
2**4





*/





// strings

// let userName; // declaration

// userName = " Shimon"; // assignment
userName[0]
userName[100]
userName.toLowerCase()   // immutable data type  - returns a new string
userName.trim()
userName.indexOf("o")
userName.slice(3,7)
userName.replace("on","shon")
console.log("hello " + userName)
userName += " addString"
'He said: "hello world"'
"He said: \"hello world\""
`He said: \`"hello world\`"`


// 

let isOnLine = false;

console.log(3<2)

console.log(1<2&&2<3)  // and

console.log(1<2||6<3)   // or



true||false
true
true||true
true
false||false
false
false&&true
false


/* type conversions 



Boolean(0)

false
Boolean(0.0001)

true
Boolean(-0.0001)

true



parseFloat("5")


parseInt("5")


parseInt("5.5")


parseInt(5.5)

parseFloat("5")
5

parseFloat("vnkfjn5")
NaN

typeof NaN
'number'

parseFloat("5.7")
5.7
parseInt("5")

5
parseInt("5.3")

5
parseInt("-5.3")

-5
parseInt("-5.99")

-5

+"5"

!! - conversion to boolean:

!!0
false
!!17
true
!!"hello"
true
!!""
false
!!undefined
false
!!null
false

!0

!2

!!3

String(9)

(9).toString()


9.5.toString()

(7.81).toString()

*/









/* 

JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic on numbers:

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

*/

/* 

JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As

+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y


*/

/*
Operator	Description
==	equal to
===	equal value and equal type תמיד נשתמש בזה:

0==false
true
""==false
true
0===false
false
""===false
false

!=	not equal

0!=false
false
!==	not equal value or not equal type נשתמש בזה

0!==false
true
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
(5<6)?1:0;
1
(7<6)?1:0;
0

*/


/* 
JavaScript Logical Operators
Operator	Description
&&	logical and
||	logical or
!	logical not

*/

// 



/*  || vs ??


0||100
""||100
false||100
1||100
-1||100
17||100
"hello"||100

0??100

""??100

undefined??100

null??100

false??100

*/


if(age>18){
    console.log("access allowed")
}else{
    console.log("access denied")
}


// turnery operator
let name = userName?userName:"anonymous" 


// 



if(1){console.log(true)}else{false}

if(0){console.log(true)}else{false}


if(""){console.log(true)}else{false}

if("hello world"){console.log(true)}else{false}

if(null){console.log(true)}else{false}

if(undefined){console.log(true)}else{false}

// 





for (let i = 0; i <10; i++) {   
    console.log(i)
}


// 


let i = 0
while(i<10){
    console.log(i)
    i++
}


// 
let i = 0
do{
    console.log(i)
    i++
}while(i<10)



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