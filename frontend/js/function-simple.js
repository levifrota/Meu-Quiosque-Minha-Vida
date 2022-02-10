function etapaDois() {
    if (document.getElementById("nome").value.trim() == "")
        document.getElementById("nome").style.border = "1px solid red";
    else if (document.getElementById("date").value.trim() == "")
        document.getElementById("date").style.border = "1px solid red";
    else if (document.getElementById("email").value.trim() == "")
        document.getElementById("email").style.border = "1px solid red";
    else if (document.getElementById("tel").value.trim() == "")
        document.getElementById("tel").style.border = "1px solid red";
    else if (document.getElementById("cep").value.trim() == "")
        document.getElementById("cep").style.border = "1px solid red";
    else if (document.getElementById("rua").value.trim() == "")
        document.getElementById("rua").style.border = "1px solid red";
    else if (document.getElementById("bairro").value.trim() == "")
        document.getElementById("bairro").style.border = "1px solid red";
    else if (document.getElementById("estado").value.trim() == "")
        document.getElementById("estado").style.border = "1px solid red";
    else if (document.getElementById("cidade").value.trim() == "")
        document.getElementById("cidade").style.border = "1px solid red";
    else if (!document.getElementById("check-termos").checked)
        alert("Só é possível proseguir caso o usuário aceite o termos e políticas de uso.");
    else {
        document.getElementById("indicador").style.top = 65 + "%";
        document.getElementById("valor-cont").textContent = "2";
        window.location.assign("#cadastro2");
    }
}

function etapaTres() {
    if (document.getElementById("list-categorias").value == "Selecionar...") {
        document.getElementById("list-categorias").style.border = "1px solid red";
    } else if (document.getElementById("cpf").value.trim() == "") {
        document.getElementById("cpf").style.border = "1px solid red";
    } else if (document.getElementById("rg").value.trim() == "") {
        document.getElementById("rg").style.border = "1px solid red";
    } else if (document.getElementById("outros-doc").value.trim() == "") {
        document.getElementById("outros-doc").style.border = "1px solid red";
    } else {
        document.getElementById("indicador").style.top = 46 + "%";
        document.getElementById("valor-cont").textContent = "3";
        window.location.assign("#cadastro3");
    }
}

function etapaQuatro() {
    if (document.getElementById("list-area").value == "Selecionar...") {
        document.getElementById("list-area").style.border = "1px solid red";
    } else if (document.getElementById("list-exp").value == "Selecionar...") {
        document.getElementById("list-exp").style.border = "1px solid red";
    } else if (document.getElementById("list-segundaopc").value == "Selecionar...") {
        document.getElementById("list-segundaopc").style.border = "1px solid red";
    } else {
        document.getElementById("indicador").style.top = 28 + "%";
        document.getElementById("valor-cont").textContent = "4";
        window.location.assign("#cadastro4");
    }
}

function etapaCinco() {
    if (document.getElementById("list-praca").value == "Selecionar...") {
        document.getElementById("list-praca").style.border = "1px solid red";
    } else if (document.getElementById("list-praca").value == "Outra" && document.getElementById("segunda-praca").value.trim() == "") {
        document.getElementById("segunda-praca").style.border = "1px solid red";
    } else {
        document.getElementById("indicador").style.top = 10 + "%";
        document.getElementById("valor-cont").textContent = "5";
        window.location.assign("#cadastro5");
    }
}

function bordas(nome) {
    document.getElementById(nome).style.border = "0px solid white";
}

function liberar(campo, local) {
    if (document.getElementById("list-praca").value == "Outra") {
        document.getElementById(campo).style.color = "#7C7C7C";
        document.getElementById(local).disabled = false;
    } else {
        document.getElementById(campo).style.color = "#c0c0c0";
        document.getElementById(local).disabled = true;
    }
}
