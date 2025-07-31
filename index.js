
let count = 0; // start from zero
const beepSound = new Audio("/button-5.mp3");
const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

function updateDisplay() {
    const countElement = document.getElementById("count");
     const messageElement = document.getElementById("message");
    countElement.innerText = count;

      // Animate count
    countElement.classList.remove("animate");
    void countElement.offsetWidth; // force reflow
    countElement.classList.add("animate");

    // Change color based on value
    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "black";
    }
    messageElement.innerText="";  //clear a message on valid keys
}
function increase() {
    count++;
    document.getElementById("count").innerText = count;
    updateDisplay();
    beepSound.play();
}

function decrease() {
    count--;
    document.getElementById("count").innerText = count;
    updateDisplay();
    beepSound.play();
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
    updateDisplay();
    updateDisplay();

}
//keyboard shortcut handling 
document.addEventListener("keydown", function(event){
    const key=event.key;
    const messageElement=document.getElementById("message")
    if (event.key==="ArrowUp"){
        increase();
    }else if(event.key ==="ArrowDown"){
        decrease();
    }else if(event.key==="r" || event.key ==="R"){
        reset();
    }
    else {
        messageElement.innerHTML=`❌ "${key}" is not a valid key. Use ↑, ↓ or R`;
    }
})
