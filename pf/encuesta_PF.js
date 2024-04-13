const esPositivo = numero => numero > 0;

const validarCantidad = cantidad => {
  if (!isNaN(cantidad) && esPositivo(cantidad)) {
    return cantidad;
  } else {
    return null;
  }
}

let miEncuesta = { preguntas: [] };

const crear = () => {
  let opciones = [];

  const pregunta = prompt("Ingrese una pregunta:");
  console.log(`Usted ingreso: ${pregunta}`);
  const cantidad = prompt("Ingrese cantidad de opciones:");
  const cantidadOpciones = validarCantidad(cantidad);

  console.log(`La pregunta tendrá: ${cantidadOpciones} opciones`);

  for (let i = 0; i < cantidadOpciones; i++) {
    let opcion = prompt(`Opción ${i + 1}:`);
    opciones = [...opciones, opcion];
  }

  miEncuesta = { ...miEncuesta, preguntas: [...miEncuesta.preguntas, { pregunta: pregunta, opciones: opciones }] };
// spread operator

   console.log(miEncuesta);

  return miEncuesta;
}

function votar() {
  if (!miEncuesta.preguntas.length) {
    console.log("No hay encuesta disponible para votar.");
    return;
  }

  miEncuesta.preguntas.forEach(pregunta => {
    console.log("Encuesta actual:", pregunta.pregunta);
    console.log("Las opciones son:");
    pregunta.opciones.forEach((opcion, index) => {
      console.log(`${index + 1}. ${opcion}`);
    });

    let seleccionOp = parseInt(prompt("Ingrese su opción"));
    if (seleccionOp >= 1 && seleccionOp <= pregunta.opciones.length) {
      console.log(`Su opción es "${pregunta.opciones[seleccionOp - 1]}".`); //-1 porque los indices empiezan de 0
    } else {
      console.log("No existe esa opión");
    }
  });
}

function opciones() {
  let op = prompt("Ingresar opción ('crear', 'votar' o 'salir'):");
  switch (op) {
    case "crear":
      crear();
      break;
    case "votar":
      votar();
      break;
    case "salir":
      console.log("Encuesta finalizada.");
      return;
    default:
      console.log("Opción no válida. Ingrese 'crear', 'votar' o 'salir'.");
  }
  opciones();
}

opciones();