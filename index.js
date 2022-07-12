const bnt = document.getElementById("bnt")
const makeRunner = (runnerNum)=> {return{first:`name ${runnerNum}`,last:`last name ${runnerNum}`,
   results:[Math.random()+1,Math.random()+1,Math.random()+1]}}
const makeRunners = (numOfRunners)=> {
    const runners =[];
    for(let i = 0 ;i<numOfRunners;i++){
        runners.push(makeRunner(i));
     }
     return runners;
};
const runnerTemplate = (runner)=>{
    const runnerNameText = `name: ${runner.first} ${runner.last} results:`
    const runnerResultsText = runner.results.reduce((text,result)=>{
        text = `${text} <li>${result}</li>`;
        return text
    },"")
    return `<div>${runnerNameText}</div> <ul>${runnerResultsText}</ul>`; 

}
const runnerArray = makeRunners(3)

bnt.onclick = function(){

    runnerArray.forEach(runner =>{

        document.body.innerHTML = document.body.innerHTML + runnerTemplate(runner);
    } )

}