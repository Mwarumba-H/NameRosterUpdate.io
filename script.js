var button = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
//dry - do not repeat yourself

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""  
}


function buttonClick() {
if (input.value.length > 0 ){
    createListElement();  
    }
}

function keyboardPressed(event) {
if (input.value.length > 0 && event.keyCode === 13 ){
    createListElement();
    } 
}

button.addEventListener("click", buttonClick);

input.addEventListener("keypress", keyboardPressed);
