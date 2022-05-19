const myName = "Meishar"
const bodyObj = document.getElementsByTagName("body")
const helloObj = document.createElement("h1")
helloObj.innerHTML =`Hi ${myName}, Hello from JS `
document.body.appendChild(helloObj)
