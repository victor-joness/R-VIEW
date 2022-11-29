let buttonPincelPrincipal = window.document.querySelector("#buttonPincel");
let buttonPincelSecundarios = window.document.querySelector(".container-buttons-pincel");
let separador = window.document.querySelector(".separador");

function PincelSecundarios(){
    centralPDF();

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

buttonPincelPrincipal.addEventListener("click", PincelSecundarios);

let buttonAPrincipal = window.document.querySelector("#buttonA");
let buttonASecundarios = window.document.querySelector(".container-buttons-A");

function buttonMaoclick(){
    centralPDF();

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

buttonAPrincipal.addEventListener("click", buttonMaoclick);


let buttonStarPrincipal = window.document.querySelector("#buttonStar");
let buttonStarSecundarios = window.document.querySelector(".container-buttons-Star");

buttonStarPrincipal.onclick = () => {
    centralPDF();

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

let buttonMão = window.document.querySelector(".container-mouse");

function buttonMãoclick(){
    buttonMão.classList.toggle("active");
}

buttonMão.addEventListener("click", buttonMãoclick);

//fazendo o script para detectar quando um dos menus está aberto, isso é por causa do pdf que nao fica
//centralizado;


let pdfaddclass = window.document.querySelector("#pdf-container");

function centralPDF(){
    pdfaddclass.classList.toggle("active");
}
