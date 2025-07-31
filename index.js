
let count = 0; // start from zero

function updateDisplay() {
    const countElement = document.getElementById("count");
    countElement.innerText = count;

    // Change color based on value
    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "black";
    }
}
function increase() {
    count++;
    document.getElementById("count").innerText = count;
    updateDisplay();
}

function decrease() {
    count--;
    document.getElementById("count").innerText = count;
    updateDisplay();
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
    updateDisplay();
}
//keyboard shortcut handling 
document.addEventListener("keydown", function(event){
    if (event.key==="ArrowUp"){
        increase();
    }else if(event.key ==="ArrowDown"){
        decrease();
    }else if(event.key==="r" || event.key ==="R"){
        reset()
    }
})
