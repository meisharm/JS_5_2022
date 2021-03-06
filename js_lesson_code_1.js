


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

+"5"// המרה למספר
5

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

!=	not equal  // לא מתשמשים

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
(5<6)?1:0;// המרה לבולאיני של הערך הנבדק
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



// else if
let day = 1;
if (day === 1) {
console.log('Sunday');
} else if (day === 2) {
console.log('Monday');
} else if (day === 3) {
console.log('Tuesday');
} else if (day === 4) {
console.log('Wednesday');
} else if (day === 5) {
console.log('Thursday');
} else if (day === 6) {
console.log('Friday');
} else if (day === 7) {
console.log('Saturday'); } else {
console.log('Not 1-7 number') }



// תרגיל כיתה

let bmi = 20
if(bmi<18.5) {
    console.log("too low")
}else if(bmi>=18.5&&bmi<=25){
    console.log("in range")
}else{
    console.log("too high")
}

// switch case

let answer = 2 + 2;

switch (answer) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

// https://www.javascripttutorial.net/javascript-switch-case/



if(1){console.log(true)}else{false}

if(0){console.log(true)}else{false}


if(""){console.log(true)}else{false}

if("hello world"){console.log(true)}else{false}

if(null){console.log(true)}else{false}

if(undefined){console.log(true)}else{false}

// for loop





for (let i = 0; i <10; i++) {   
    console.log(i)
}


// 


// let i = 0
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



// for of / for each / for in 

// arrays - mutable + by reference


const users = ["meishar", "rotem", "yogev",77,false,null]


const myArray = ["a","b","c"]

myArray.length

myArray[0]

myArray[2]

myArray[3]

myArray.push(6)

for(let i = 0; i < myArray.length; i++){console.log(myArray[i])} // regular loop


for(let ind in myArray){console.log(myArray[ind])} // index
                        

for(let element of myArray){console.log(element)} //item
                        

myArray.forEach((element)=>console.log(element)) // callback function - we'll learn more about this in the future 

myArray.forEach(function(element){console.log(element)}) // callback function - we'll learn more about this in the future 

// תרגיל כיתה


let arraySum = 0;

for(let i = 0; i < myArray.length; i++){
    arraySum += myArray[i]

}
console.log(arraySum)
// 

const add2 = function(number){
    return number+2
}

/*
פונקציה יכולה:
להחזיר ערך
:לעשות משהו במציאות  
1. console.log
2. DOM manipulation
 לשנות אובייקט מיוטיבל
לשנות או להגדיר משתנה גלובלי
שני האחרונים לא בסט פרקטיס
*/


const addToConsolLog = function (num1,num2){
    console.log(num1+num2)
}

addToConsolLog(2,4)










function addToReturn(num1,num2){
    console.log("done");
    return num1+num2;
}

addToReturn(2,4)



// 


const addToConsolLogArrow = (num1,num2) => {
    console.log(num1+num2)
}

addToConsolLogArrow(2,4)








// const arr = [44,66]
const onlyEven = function(arr){
    const returnArray = [];
    for (let i = 0; i < arr.length;i++){
        if(arr[i]%2===0){
            returnArray.push(arr[i])
        }
    
    }
    return returnArray
}
let myArrayToBeEven = [1,2,3,4,5,6,7]
onlyEven(myArrayToBeEven)

// מדברים על שיעורי הבית

// כיתבו פונקציה שמקבלת array  של מספרים מדפיסה לקונסול כל מספר בנפרד 


const myfunction_1 = function(arr){
      for(let item of arr){
          console.log(item)
      }

}


function myfunction_2(arr){
    for(let item of arr){
        console.log(item)
    }
    
}
// arrow function the "this" problem
const myfunction_3 = (arr)=>{
    for(let item of arr){
        console.log(item)
    }
    
}

const addArrow = (num1,num2)=>{
    console.log(num1+num2)
    return num1+num2
}

addArrow(2,4)
const greetArrow = ()=>{
    return "hi there"
    console.log("hi!")    // will never run
}


const arraySquare = function(arr){
    const arraySq = [];
    for(let number of arr){
        arraySq.push(number**2)
    }
    return arraySq
} 
// 

function max(arr){
    let key=arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i]>key){
            key=arr[i];
        }
    }
    return key;
}


// תרגיל כיתה: להריץ את הקוד למעלה
// תרגיל כיתה: לאפס מספרים זוגיים - 
// מקבלים אראי מספרים ואיפה שיש מספר זוגי יהיה אפס במערך שמוחזר

// [1,2,3,4,5,6,7,8,9,10,11] => [1,0,3,0,5,0,7,0,9,0,11]

//  f(x)= x+2 

// f(9)= 9 + 2 = 11

// מה פונקציה מחזירה אם אין ריטרנ?
// הפרמטרים עוברים לפי הסדר

const myfunction = function(pram) {
    return "the parm is: " + pram
    console.log(pram)
}
// 






// array methods 
// let myArray = [1,2,3]
// 


myArray.filter(item => item%2)


/*
const myArray = [1,2,3]

const isOdd = (element)=>{return element%2!==0;}
   
const addsArray = myArray.filter(isOdd);

addsArray
(2) [1, 3]
*/

/*
תרגיל: בצעו בעזרת פילטר ופונקציה (עם שם ) ששומר רק על המספרים שגדולים מעשר

const myArray = [1,2,3,33,45]

const isBigerThen10 = (element)=>{return element>10;}
   
const bigNumArray = myArray.filter(isBigerThen10);

bigNumArray
*/




/*
let myArray = [1,2,3]

myArray.filter(item => item%2)
(2) [1, 3]
let myArray = [1,2,3]

myArray.filter((item) => {item%2})
[]
let myArray = [1,2,3]

myArray.filter((item) => {return item%2})
(2) [1, 3]
let myArray = [1,2,3]

myArray.filter(function(item){return item%2})
(2) [1, 3]
myArray
(3) [1, 2, 3]
*/

myArray.map(item => [item])
/*
myArray.map((item) => {return item**2})
(3) [1, 4, 9]
myArray.map(item => item+1)
(3) [2, 3, 4]
*/

// array.reduce - not for now
// const array1 = [1, 2, 3, 4];

/* // 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
); */

console.log(sumWithInitial);
// expected output: 10


// 
// object literals
let person = {name: 'yossi', age:27, occupation: "programer" }
// 
person.name // יותר פשוט עובד רק אם אין רווח בקיי
// 
person["name"] //תמיד עובדת
// 
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};
// 
let person1 = {"first name": 'yossi', age:27, occupation: "programer" , address: {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
}}
// 
/* 
let person2 = {"first name": 'yossi', age:27, 
occupation: "programer" , address: address} 
*/
// 
let person2 = {"first name": 'yossi', age:27, 
occupation: "programer" , address} // syntactic sugar
// 
address['building no'];
// 
console.log(address.district); // undefined
// 

let newPerson = {
    firstName: 'John',
    lastName: 'Doe'
};

newPerson.firstName = 'Jane';

console.log(newPerson);

// 

newPerson.age = 25;
// 
delete newPerson.age;
// "this" in regular function
newPerson.greet = function(){console.log(`hello my name is ${this.firstName}`)}
// 
// "this" in arrow function
newPerson.greetArrow = ()=>{console.log(`hello my name is ${this.firstName}`)}
// 
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);
// loop in object
for(const property in {name:"yossi",age:12}){
    console.log(property)
}
// 
function showProps(obj, objName) {
    let result = '';
    for (const i in obj) {
      // obj.hasOwnProperty() is used to exclude properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    console.log(result);
  }
//   
  showProps({name:"yossi",age:12},"user")


// 
const tasksArray = [{text:"first task",active:true},{text:"secund task",active:true},
{text:"third task",active:true},{text:"forth task",active:true}]

// 
for(const property in {name:"yossi",age:12,greet(){console.log("hi")}}){
    console.log(property)
}

// 
const user = {name:"yossi",age:12,greet(){console.log("hi")}}
user.greet()
// 

const makeRunner = (runnerNum)=> {return{first:`name ${runnerNum}`,last:`last name ${runnerNum}`,
   results_:[Math.random()+1,Math.random()+1,Math.random()+1]}}


const makeRunners = (numOfRunners)=> {
    const runners =[]
    for(let i = 0 ;i<numOfRunners;i++){
        runners.push(makeRunner(i))
     }
     return runners
}

// myMap 


const myfunc = function(x){
    return x+2
}

const ourMap = (array, func)=>{
    const retArr = [];
    for(let i=0 ;i<array.length; i++){
        console.log("i", i)
        console.log("array[i]", array[i])
        console.log("func(array[i])", func(array[i]))

        retArr.push(func(array[i]));
    }
    return retArr
}

const myArray1 = [8,2,3,33]

ourMap(myArray1, myfunc)

// ourFilter

const myFunc1 = (item)=>{
    return item>5;
}
const ourFilter = (array, func)=>{
    const retArr = [];
    for(let i=0 ;i<array.length; i++){
        console.log("i", i)
        console.log("array[i]", array[i])
        console.log("func(array[i])", func(array[i]))
        if(func(array[i])){retArr.push(array[i])};
    }
    return retArr
}
const myArray2 = [8,2,3,33]

ourFilter(myArray2,myFunc1)


// array.reduce 
const array1 = [10, 15, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (resultTillNow, nextValue) => {
      console.log("resultTillNow", resultTillNow);
      console.log("nextValue", nextValue)
      return resultTillNow + nextValue
    }
      ,
  initialValue
);

/* VM860:5 resultTillNow 0
VM860:6 nextValue 10
VM860:5 resultTillNow 10
VM860:6 nextValue 15
VM860:5 resultTillNow 25
VM860:6 nextValue 3
VM860:5 resultTillNow 28
VM860:6 nextValue 4 */

sumWithInitial
// 32

const wordArray = ["I","love","JS"];

wordArray.reduce(
    (resultTillNow, nextItem) => resultTillNow + " " + nextItem,
    "" //בלי ערך פה עבד יותר טוב - ללא רווח בהתחלה
)



[1,2,3].sort((a,b)=>a<b?1:-1)
// (3) [3, 2, 1]
[1,2,3].map(item=>({item:item}))
// (3) [{…}, {…}, {…}]0: {item: 1}1: {item: 2}2: {item: 3}length: 3[[Prototype]]: Array(0)
// let objArray = [1,2,3].sort((a,b)=>a<b?1:-1)
// undefined
let objArray = [1,2,3].map(item=>({"a":item}))
objArray
// (3) [{…}, {…}, {…}]0: {item: 1}1: {item: 2}2: {item: 3}length: 3[[Prototype]]: Array(0)
objArray.sort((a,b)=>a<b?1:-1)
// (3) [{…}, {…}, {…}]0: {item: 3}1: {item: 2}2: {item: 1}length: 3[[Prototype]]: Array(0)

objArray.reduce((till,next)=>{
    if (till.a>next.a) {return till}
    else {return next}})
/* sorting in place! 

[2,3,1].sort()
(3) [1, 2, 3]

[2,3,1,1000,100].sort()
(5) [1, 100, 1000, 2, 3]


[2,3,1].sort((a,b)=>a-b)
(3) [1, 2, 3]

[2,3,1].sort((a,b)=>-a+b)
(3) [3, 2, 1]
*/

// spred - making a copy
let newMyArray = [...myArray]

let newUser = {...user}



// DOM

// selectors

document.getElementById("myId")
document.getElementBytagName("H1") // html collection
document.getElementByClassName("myClass")


document.querySelector("p");
document.querySelector(".myClass");
document.querySelector("#bntId").innerHTML = "Hello World!";

// adding event listeners

/* 
let bnt = document.createElement("botten")
undefined
document.body.append(bnt)
undefined
let bnt = document.createElement("button")
undefined
document.body.append(bnt)
undefined
bnt.innerHTML = "press me!"
'press me!'
bnt.onclick = function(e){console.log(e)}
ƒ (e){console.log(e)}
VM530:1 


*/

// <bnt onclick = "alert('yes!')">click me</bnt>


bnt.onclick = function() {alert('yes!')}


addEventListener(click,function(){alert('yes!')}) // function(e) 






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



companies = [
    {name: "Company One", category: "Finance", profit: 120},
    {name: "Company Two", category: "Retail", profit: 990},
    {name: "Company Three", category: "Auto", profit: 390},
    {name: "Company Four", category: "Retail", profit: 450},
    {name: "Company Five", category: "Technology", profit: 234},
    {name: "Company Six", category: "Finance", profit: 117},
    {name: "Company Seven", category: "Auto", profit: 120},
    {name: "Company Eight", category: "Technology", profit: 40},
    {name: "Company Nine", category: "Retail", profit: -5}
 ];
 
 companies.reduce((till, currentValue)=>{

return `${till} ${currentValue.name} profit: ${currentValue.profit}`

 },
""
 )
 

 function infoComp(result, item){
    if(result){return result + ` ${item.name} profit: ${item.profit}, `}
    else{return`${item.name} profit: ${item.profit}, `};
  }




  let myArray3 = [{"a":1},{"a":2}]

  const findMax = (till,next)=>{
    if(till.a > next.a){return till};
    return next

  }
  myArray3.reduce(findMax) // initialValue can be the default 

  const absVal = (x) => {
      if(x>=0){return x}
      else {return (-1)*x}
  }

