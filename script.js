var operaciones = function (e) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var result = document.getElementById("resultado");
    var operacion = e.target.id;
    

    if (operacion == "suma") {
        var resultado = numero1 + numero2;
    }
    else if (operacion == "resta") {
        var resultado = numero1 - numero2;
    }
    else if (operacion == "multiplica") {
        var resultado = numero1 * numero2;
    }
    else if (operacion == "divide") {
        var resultado = numero1 / numero2;
    }

    result.innerHTML = resultado;
    
}


//Obtenemos el evento click en cada boton
var botones = document.getElementById("btns");
botones.addEventListener("click", operaciones);