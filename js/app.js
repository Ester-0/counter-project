// Tu código aquí.
let counterValue = 0;

// Al hacer click en buttonaddCount sume 1

const buttonAddCount = document.getElementById("addCount");

function addOne() {
    counterValue++;
    document.querySelector("#counter").textContent = counterValue;

    if (counterValue < 0) {
        document.querySelector('#counter').style.color = "red";
    
    } else if (counterValue > 0) {
        document.querySelector('#counter').style.color = "green";
    } else {
        document.querySelector('#counter').style.color = "black";
    }
}

buttonAddCount.addEventListener("click", addOne);

// Al hacer click en buttonLowerCount reste 1

const buttonLowerCount = document.getElementById("lowerCount");

function lowerOne() {
    counterValue--;
    document.querySelector("#counter").textContent = counterValue;

    if (counterValue < 0) {
        document.querySelector('#counter').style.color = "red";
    
    } else if (counterValue > 0) {
        document.querySelector('#counter').style.color = "green";
    } else {
        document.querySelector('#counter').style.color = "black";
    }
}

buttonLowerCount.addEventListener("click", lowerOne);


// Hay que poner el if dento de cada funcion porque si no solo se ejecuta una vez.