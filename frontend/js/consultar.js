function consultar() {
        if (document.getElementById("email").value.trim() == ""){
                document.getElementById("email").style.border = "1px solid red";
        }
        else if (document.getElementById("password").value.trim() == ""){
                document.getElementById("password").style.border = "1px solid red";
        }
        else{
                window.location.href = '../html/consultar.html';
        }
}
        
function bordas(nome) {
    document.getElementById(nome).style.border = "0px solid white";
}