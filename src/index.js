import {isValid, maskify} from './validator.js';

let originalValue = ""

const validator = () => {
    
    const accepted = isValid(originalValue);

    if (accepted == true) {

    document.getElementById("tarjetaaceptada").innerHTML = "SU COMPRA FUE REALIZADA CON EXÍTO";
    document.getElementById("tarjetarechazada").innerHTML = "";

    }
    
    else {
 
    document.getElementById("tarjetarechazada").innerHTML = "SU COMPRA FUE RECHAZADA";
    document.getElementById("tarjetaaceptada").innerHTML = "";

}

    
}


window.validator = validator;
const input=  document.getElementById('validator');
const mask = (event) => {
    console.log(event);
    if (event.inputType === "insertText") {
        originalValue += event.data;
    }
    else if (event.inputType === "deleteContentBackward") {
        const arr = Array.from(originalValue);
        arr.pop();
const transform = arr.join("");

originalValue = transform;

    }
    else if (event.inputType === "insertFromPaste") {
        originalValue = input.value;


    }
    
        if (input.value.length > 16) { input.value = input.value.slice(0,16); }
        
        const hide = maskify(input.value);
        console.log(hide);

        input.value = hide;

}

window.mask = mask;

const togo = () => {
    document.getElementById('index1').className = "hidden center"
    document.getElementById('index2').className = "visible center"
}
window.togo = togo; 

