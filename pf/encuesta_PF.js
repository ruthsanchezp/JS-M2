const esPositivo = numero => numero > 0;

const validarCantidad = (cantidad) => {
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

  encuesta = [];

  const pregunta = prompt("Ingrese una pregunta:");
  console.log(`Su pregunta ingresada es ${pregunta}`);
  const cantidad = prompt("Ingrese cantidad de opciones:");
  const cantidadOpciones = validarCantidad(cantidad);
  console.log(`La pregunta tendrá: ${cantidadOpciones} opciones`);

  let opciones = [];

  for (let i = 0; i < cantidadOpciones; i++) {
    let opcion = prompt(`Opción ${i + 1}:`);
    opciones.push(opcion);
  }
  encuesta.push({ pregunta: pregunta, opciones: opciones });
  console.log(encuesta);
  return encuesta;
}

crearEncuesta()