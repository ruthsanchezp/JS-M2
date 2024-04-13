const esPositivo = numero => numero > 0;

const validarCantidad = (cantidad) => {
  //cantidad = parseInt(cantidad);
  if (!isNaN(cantidad) && esPositivo(cantidad)) {
    return cantidad;
  } else {
    //console.log("Ingresar valor numérico.");
    return null;
  }
}

const crear = () => {

  let encuesta = [];
  let opciones = [];

  const pregunta = prompt("Ingrese una pregunta:");
  console.log(`Su pregunta ingresada es ${pregunta}`);
  const cantidad = prompt("Ingrese cantidad de opciones:");
  const cantidadOpciones = validarCantidad(cantidad);

  console.log(`La pregunta tendrá: ${cantidadOpciones} opciones`);

  for (let i = 0; i < cantidadOpciones; i++) {
    let opcion = prompt(`Opción ${i + 1}:`);
    opciones = [...opciones, opcion];
  }

  encuesta = [...encuesta, { pregunta: pregunta, opciones: opciones }];
  console.log(encuesta);

  return { encuesta: encuesta, opciones: opciones };
}

function votar() {
  console.log(crear)
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