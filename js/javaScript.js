//Calculadora coder

alert("Buenos dias, bienvenidos a la calculadora de nota de CoderHouse \nDesarrollo Web:")
alert("Recorda siempre utilizar minúsculas")

let persona = ""
let password = ""
let login = false

while (login === false) {
    persona = prompt("Ingresa tu nombre:")
    password = prompt("Ingresa tu contraseña:")
    if (persona === "guido" && password === "1234") {
        console.log("Bienvenido nuevamente", persona)
        login = true
    } else {
        alert("No se reconoce persona y/o contraseña.")
    }
}

alert("Vamos a calcular tu nota final de CoderHouse")

let asistencias = parseInt(prompt("Ingresa la cantidad de asistencias a clase:"))
console.log("Asistencias:", asistencias)
let valoraciones = parseInt(prompt("Ingresa la cantidad de valoraciones a clases:"))
console.log("Valoraciones:", valoraciones)
let desafios = parseInt(prompt("Ingresa la cantidad de desafios aprobados:"))
console.log("Desafios:", desafios)
let preentregas = parseInt(prompt("Ingresa la nota total de preentregas aprobadas:"))
console.log("Preentregas:", preentregas)
let proyectoFinal = parseInt(prompt("Ingresa la nota del proyecto final:"))
console.log("Proyecto Final:", proyectoFinal)

let notaCoder = (asistencias + valoraciones + desafios + preentregas + proyectoFinal)

console.log("Tu nota final es:", notaCoder)


if (notaCoder > 65) {
    alert("¡Felicitaciones, estas en el TOP 10!")
    console.log("Gracias, terminaste el simulador de calculo de nota de CoderHouse.")
    alert("Gracias, terminaste el simulador de calculo de nota de CoderHouse.")
} else if (notaCoder >= 60 && notaCoder < 66) {
    alert("¡Felicitaciones, Aprobaste tu cursada!")
    console.log("Gracias, terminaste el simulador de calculo de nota de CoderHouse.")
    alert("Gracias, terminaste el simulador de calculo de nota de CoderHouse.")
} else if (notaCoder < 60) {
    alert("A pesar de terminar tu cursada, deberás recursar para poder tener tu certificado de CoderHouse.")

    function recursar() {
        alert("Para recursar deberás abonar una tarifa adicional de $5000");
        alert("Recuerda que solo se puede pagar con tarjeta de crédito");
        let tarjeta;
        do {
            tarjeta = prompt("Elija con la tarjeta: \n1)Visa 3 cuotas sin interés \n2)MasterCard 2 cuotas sin interés \n3)American 1 cuota sin interés \n4)Cabal 6 cuotas sin interés");
        }
        while (tarjeta != 1 && tarjeta != 2 && tarjeta != 3 && tarjeta != 4);
        switch (tarjeta) {
            case "1":
                return "Visa";
            case "2":
                return "MasterCard";
            case "3":
                return "American";
            case "4":
                return "Cabal";
        }
    }

    function validarCuotas(tarjeta) {
        if (tarjeta === "Visa") {
            return 3;
        } else if (tarjeta === "MasterCard") {
            return 2;
        } else if (tarjeta === "American") {
            return 1;
        } else {
            return 6;
        }
    }


    let tarjetaSeleccionada = recursar()
    let cuotas = validarCuotas(tarjetaSeleccionada)
    cobrar(tarjetaSeleccionada, cuotas)
    let monto = false

    function cobrar(tarjeta, cuotas) {
        alert("Usted pagará con: " + tarjeta.toUpperCase() + "\nEn: " + cuotas +" cuota/s");
    }

    while (monto === false) {
        let abonar = prompt("Usted pagará: $");
        if (abonar === "5000") {
            alert("Le quedarán " + cuotas + " cuota/s de $ " + parseFloat((abonar / cuotas)));
            console.warn("Le quedarán " + cuotas + " cuota/s de $ " + parseFloat((abonar / cuotas)));
            monto = true
        } else {
            alert("El monto no coincide con los precios publicados");
        }
    }
}