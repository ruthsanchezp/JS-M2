class Encuesta {
  constructor() {
    this.preguntas = [];
  }

  crear() {
    let cantidadPreguntas = prompt("¿Cuántas preguntas tendrá la encuesta?");
    cantidadPreguntas = parseInt(cantidadPreguntas);
    console.log(`La pregunta tendrá ${cantidadPreguntas} preguntas`)

    if (!cantidadPreguntas || cantidadPreguntas < 1) {
      console.log("Debe ingresar un número válido de preguntas.");
      return;
    }

    for (let j = 0; j < cantidadPreguntas; j++) {
      const preguntaTexto = prompt(`Ingresar pregunta ${j + 1}: Ej. Ciudad favorita`);
      console.log(`Pregunta ${j + 1}: ${preguntaTexto}`);
      let cantidadRespuestas = prompt("Ingrese la cantidad de opciones: Ej. 2");
      cantidadRespuestas = parseInt(cantidadRespuestas);
      console.log(`La pregunta tendrá: ${cantidadRespuestas} opciones`);


      if (!cantidadRespuestas || cantidadRespuestas < 1 || cantidadRespuestas > 8) {
        console.log("Ingresar valor entre 1 y 8 para la cantidad de opciones.");
        return;
      }

      let respuestas = [];
      for (let i = 0; i < cantidadRespuestas; i++) {
        const respuestaTexto = prompt(`Ingrese la opcion ${i + 1} para la pregunta ${j + 1}: Ej. Frutillar`);
        console.log(`Opción ${i + 1} es ${respuestaTexto}`)
        respuestas.push({ texto: respuestaTexto, votos: 0 });
      }

      this.preguntas.push({ texto: preguntaTexto, respuestas: respuestas });
    }
    console.log("Preguntas creadas:", this.preguntas);
  }

  votar() {
    this.preguntas.forEach((pregunta, indexPregunta) => {
      pregunta.respuestas.forEach((respuesta, indexRespuesta) => {
        console.log(`Pregunta a votar: ${pregunta.texto}`);
        let voto = parseInt(prompt(`"${pregunta.texto}" \nIngrese 1 para votar por "${respuesta.texto}":`));
        if (voto === 1) {
          respuesta.votos += 1;
          console.log(`Votos registrados para "${respuesta.texto}": ${respuesta.votos}`);
          return; 
        }
      });
    });
  }
}

const encuesta = new Encuesta();

function opciones(encuesta) {
  let op = prompt("Ingresar opción ('crear', 'votar' o 'salir'):");
  switch (op) {
    case "crear":
      encuesta.crear();
      break;
    case "votar":
      encuesta.votar();
      break;
    case "salir":
      console.log("Encuesta finalizada.");
      return; 
    default:
      console.log("Opción no válida. Ingrese 'crear', 'votar' o 'salir'.");
  }
  opciones(encuesta); 
}

opciones(encuesta);
