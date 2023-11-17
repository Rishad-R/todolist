const inputbox = document.getElementById("input-box");
const tasktobedone = document.getElementById("tasktobedone");

function addtask(){
    if(inputbox === ''){
        alert("You Must write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        tasktobedone.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value='';
}