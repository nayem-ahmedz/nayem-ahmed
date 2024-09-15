// Home Page Script

//auto text effect in job-rule
const ruleField = document.getElementById('mcr-rule-title');
const job = ['Front-end Web Developer', 'Content Creator', 'Programmer'];
let charIndex = 0;
let jobIndex = 0;
function updateRule(){
    charIndex++;
    ruleField.innerHTML = job[jobIndex].slice(0, charIndex);
    if(charIndex===job[jobIndex].length){
        jobIndex++;
        charIndex=0;
    }
    if(jobIndex===job.length){
        jobIndex=0;
    }
    setTimeout(updateRule, 250);
}
updateRule();

//contact button animation
setTimeout(danceBtn, 2000);
function danceBtn(){
    const contantBtn = document.querySelector('.mcr-btn');
    contantBtn.classList.toggle('mcr-btn-dance');
    setTimeout(danceBtn, 3000)
}