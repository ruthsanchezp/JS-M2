const esPositivo = numero => numero > 0;

const validarCantidadRespuestas = (cantidad) => {
  if (!isNaN(cantidad) && esPositivo(cantidad)) {
    return cantidad;
  } else {
    console.log("Ingresar valor numerico.");
  }
};

function crearEncuesta() {
  let cantidadPreguntas = parseInt(prompt("¿Cuántas preguntas tendrá la encuesta?"));
  if (!esPositivo(cantidadPreguntas)) {
    console.log("Debe ingresar un número válido de preguntas.");
  }
}
// Falta votar
// Falta menu