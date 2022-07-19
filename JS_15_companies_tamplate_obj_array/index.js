const companies = [
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
const ulComp = document.getElementById("ul");
const bntCompAndData = document.getElementById("bntCompaniesWithData");
const bntOnlyName = document.getElementById("bntOnlyCompanies");

bntCompAndData.onclick = () =>{
   ul.innerHTML = "";
   for (const company of companies){
      
         const liComp =  document.createElement("li")
         liComp.innerHTML = `${company.name}`
         ulComp.appendChild(liComp)
         const dataList = document.createElement("ul")
         liComp.appendChild(dataList)
         for(const prop in company){
            const dataListItem = document.createElement("li")
               dataListItem.innerHTML = `${prop}: ${company[prop]}`
               dataList.appendChild(dataListItem);

         }
         
      }
   }

bntOnlyName.onclick = () =>{
   
   }
