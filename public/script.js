const inputbox = document.getElementById("input-box");
const tasktobedone = document.getElementById("tasktobedone");


function addtask(){
    if(inputbox.value === ""){
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
tasktobedone.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);