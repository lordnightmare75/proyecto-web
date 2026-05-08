
/*var nombre="carlos";
var n1=parseInt(prompt("indique el numero 1"));
var n2=parseInt(prompt("indique el numero 2"));
var op=prompt("indique la operacion que desea: ");
var resultado;
if (op=="suma"){
    resultado=n1+n2;
}
if (op=="resta"){
    resultado=n1-n2;
}
if (op=="multiplicacion"){
    resultado=n1*n2;
}
if (op=="division"){
    resultado=n1/n2;
}

alert("el resultado es: "+resultado)
*/

function calcular(){
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    var op=document.getElementById("operar").value;
    var resultado;
    if (op=="1"){
        resultado=n1+n2;
    }
    if (op=="2"){
        resultado=n1-n2;
    }
    if (op=="3"){
        resultado=n1*n2;
    }
    if (op=="4"){
        resultado=n1/n2;
    }
    document.getElementById("resultado2").textContent="el resultado es: "+resultado;
    
}

function limpiar(){
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";







}