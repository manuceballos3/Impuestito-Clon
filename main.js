//Función simple que devuelve un monto, ingresado por el usuario, sumado 75%

const impuestos = 0.75

function calcularSumaImpuestos(monto){
    return monto + (monto * impuestos);
}

function sumarImpuestos(){
    let montoStr = document.getElementById("monto").value;

    let monto = parseFloat(montoStr);

    if (!isNaN(monto)) {
        let resultado = calcularSumaImpuestos(monto)

        document.getElementById("resultado").textContent = resultado;
    } else { 
        alert("Por favor, ingresa un monto válido")
    }
}
