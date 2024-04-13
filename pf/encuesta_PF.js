const esPositivo = numero => numero > 0;

const validarCantidadPreguntas = (cantidad) => {
  cantidad = parseInt(cantidad);
  if (!isNaN(cantidad) && esPositivo(cantidad)) {
    //console.log(`Usted va a ingresar ${cantidad} preguntas`);
    return cantidad;
  }
  else {
    console.log("Ingresar valor numérico.");
    return undefined;
  }
}

function crearEncuesta() {
  const cantidad = prompt("Ingrese cantidad de preguntas:");
  const cantidadPreguntas = validarCantidadPreguntas(cantidad);
  console.log(`Se crearán ${cantidadPreguntas} preguntas `)

}

//Cantidad de preguntas que tendrá la encuesta
crearEncuesta()
  let cantidadPreguntas = parseInt(prompt("¿Cuántas preguntas tendrá la encuesta?"));
  if (!esPositivo(cantidadPreguntas)) {
    console.log("Debe ingresar un número válido de preguntas.");
  }
}
// Falta votar
// Falta menu
