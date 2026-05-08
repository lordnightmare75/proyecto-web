var Usuario="juan";
var Contraseña="1234";
function validar(){
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    if(user===Usuario && pass===Contraseña){
        alert("Contraseña correcta");
        window.location.href="./sistemaautos.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
    }
    function afiliar(){
        document.getElementById("nombre").value="";
        document.getElementById("apellido").value="";
        document.getElementById("edad").value="";
     var ma = document.getElementById("email").value;

        if(ma=="tomystefanini@gmail.com"){
            document.getElementById("resultado3").textContent = "usuario ya existente";
        }else{
            document.getElementById("resultado3").textContent = "usuario afiliado";
        }
    }
    function cotizar(){
        var mar= document.getElementById("marca").value;
        var ta= document.getElementById("tauto").value;
        var fi= document.getElementById("financiamiento").value;

        if(mar=="1" && ta=="1" && fi== "1"){
        document.getElementById("resultado4").textContent = "el plan vale 25.000 dolares";
        }




    }
    


