const esPositivo = numero => numero > 0;

const validarCantidad = (cantidad) => {
  cantidad = parseInt(cantidad, 10);
  if (!isNaN(cantidad) && esPositivo(cantidad)) {
    return cantidad;
  } else {
    console.log("Ingresar valor numérico.");
    return undefined;
  }
}

function crearEncuesta() {
  let encuesta = [];

  const pregunta = prompt("Ingrese una pregunta:");
  console.log(`Su pregunta ingresada es ${pregunta}`);
  const cantidad = prompt("Ingrese cantidad de opciones:");
  const cantidadOpciones = validarCantidad(cantidad);

 console.log(`La pregunta tendrá: ${cantidadOpciones} opciones`);

let opciones = [];

for (let i = 0; i < cantidadOpciones; i++) {
let opcion = prompt(`Opción ${i + 1}:`);
 opciones = [...opciones, opcion];  
    }

  encuesta = [...encuesta, { pregunta: pregunta, opciones: opciones }];
  console.log(encuesta);

return encuesta;
}

function votarEncuesta() {
}

crearEncuesta();