//Función simple que devuelve un monto, ingresado por el usuario, multiplicado por 2.

const impuestos = 1

function calcularSumaImpuestos(monto){
    return monto + (monto * impuestos);
}

function sumarImpuestos(){
    let montoUsuario = document.getElementById("monto").value;

    let monto = parseFloat(montoUsuario);

    if (!isNaN(monto)) {
        let resultado = calcularSumaImpuestos(monto)

        document.getElementById("resultado").textContent = resultado;
    } else { 
        alert("Por favor, ingresa un monto válido.")
    }
}

document.getElementById("reiniciar").addEventListener("click", function() {
    document.getElementById("monto").value = "";
    document.getElementById("resultado").textContent = "";
});
