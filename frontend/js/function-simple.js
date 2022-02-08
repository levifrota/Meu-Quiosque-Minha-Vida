function etapaDois() {
    document.getElementById("indicador").style.top = 65 + "%";
    document.getElementById("valor-cont").textContent = "2";
}

function etapaTres() {
    document.getElementById("indicador").style.top = 46 + "%";
    document.getElementById("valor-cont").textContent = "3";
}

function etapaQuatro() {
    document.getElementById("indicador").style.top = 28 + "%";
    document.getElementById("valor-cont").textContent = "4";
}

function etapaCinco() {
    document.getElementById("indicador").style.top = 10 + "%";
    document.getElementById("valor-cont").textContent = "5";
}


// function areaDois() {
//     var cad1 = document.getElementById("cadastro4")
//     console.log(cad1.scrollHeight);
//     // window.scrollTo({ left: 0, top: cad1.scrollHeight, behavior: "smooth" });
//     // cad1.scrollTop = cad1.scrollHeight - cad1.getBoundingClientRect().height;
//     document.getElementById("cadastro4").scrollTop = document.getElementById("cadastro4").scrollHeight;
//     document.getElementById("indicador").style.top = 65 + "%";
//     document.getElementById("valor-cont").textContent = "2";
// }

// function areaTres() {
//     var cad2 = document.getElementById("cadastro3")
//     console.log(cad2.scrollHeight)
//     window.scrollTo({ left: 0, top: cad2.scrollHeight, behavior: "smooth" });
//     document.getElementById("indicador").style.top = 46 + "%";
//     document.getElementById("valor-cont").textContent = "3";
// }

// function areaQuatro() {
//     var cad3 = document.getElementById("cadastro4")
//     console.log(cad3.scrollHeight)
//     window.scrollTo({ left: 0, top: cad3.scrollHeight, behavior: "smooth" });
//     document.getElementById("indicador").style.top = 28 + "%";
//     document.getElementById("valor-cont").textContent = "4";
//     alert("teste");
// }