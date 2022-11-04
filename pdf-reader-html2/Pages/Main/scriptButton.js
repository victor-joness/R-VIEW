let buttonPincelPrincipal = window.document.querySelector("#buttonPincel");
let buttonPincelSecundarios = window.document.querySelector(".container-buttons-pincel");
let separador = window.document.querySelector(".separador");

buttonPincelPrincipal.onclick = () => {
    if(buttonASecundarios.classList.contains("active") || buttonAPrincipal.classList.contains("active")){
        buttonAPrincipal.classList.remove("active");
        buttonASecundarios.classList.remove("active");
        separador.classList.remove("activeA");
    }

    if(buttonStarSecundarios.classList.contains("active") || buttonStarPrincipal.classList.contains("active")){
        buttonStarPrincipal.classList.remove("active");
        buttonStarSecundarios.classList.remove("active");
        separador.classList.remove("activeStar");
    }

    buttonPincelPrincipal.classList.toggle("active");
    buttonPincelSecundarios.classList.toggle("active");
    separador.classList.toggle("activePincel");
}

let buttonAPrincipal = window.document.querySelector("#buttonA");
let buttonASecundarios = window.document.querySelector(".container-buttons-A");

buttonAPrincipal.onclick = () => {
    if(buttonPincelSecundarios.classList.contains("active") || buttonPincelPrincipal.classList.contains("active")){
        buttonPincelPrincipal.classList.remove("active");
        buttonPincelSecundarios.classList.remove("active");
        separador.classList.remove("activePincel");
    }

    if(buttonStarSecundarios.classList.contains("active") || buttonStarPrincipal.classList.contains("active")){
        buttonStarPrincipal.classList.remove("active");
        buttonStarSecundarios.classList.remove("active");
        separador.classList.remove("activeStar");
    }

    buttonAPrincipal.classList.toggle("active");
    buttonASecundarios.classList.toggle("active");
    separador.classList.toggle("activeA");
}

let buttonStarPrincipal = window.document.querySelector("#buttonStar");
let buttonStarSecundarios = window.document.querySelector(".container-buttons-Star");

buttonStarPrincipal.onclick = () => {
    if(buttonPincelSecundarios.classList.contains("active") || buttonPincelPrincipal.classList.contains("active")){
        buttonPincelPrincipal.classList.remove("active");
        buttonPincelSecundarios.classList.remove("active");
        separador.classList.remove("activePincel");
    }

    if(buttonASecundarios.classList.contains("active") || buttonAPrincipal.classList.contains("active")){
        buttonAPrincipal.classList.remove("active");
        buttonASecundarios.classList.remove("active");
        separador.classList.remove("activeA");
    }

    buttonStarPrincipal.classList.toggle("active");
    buttonStarSecundarios.classList.toggle("active");
    separador.classList.toggle("activeStar");
}