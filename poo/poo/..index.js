class Encuesta {
  constructor() {
    this.preguntas = [];
  }

  crear() {
    let cantidadPreguntas = prompt("Ingresar número de preguntas de la encuesta");
    cantidadPreguntas = parseInt(cantidadPreguntas);
    console.log(`La encuesta tendrá ${cantidadPreguntas} preguntas`)

    if (!cantidadPreguntas || cantidadPreguntas < 1) {
      console.log("Ingrese número válido");
      return;
    }

    for (let j = 0; j < cantidadPreguntas; j++) {
      const pregunta = prompt(`Ingresar pregunta ${j + 1}: Ej. Ciudad favorita`);
      console.log(`Pregunta ${j + 1}: ${pregunta}`);
      let cantidadRespuestas = prompt("Ingrese la cantidad de opciones: Ej. 2");
      cantidadRespuestas = parseInt(cantidadRespuestas);
      console.log(`La pregunta tendrá: ${cantidadRespuestas} opciones`);

      if (!cantidadRespuestas || cantidadRespuestas < 1 || cantidadRespuestas > 8) {
        console.log("Ingresar valor entre 1 y 8 para la cantidad de opciones.");
        return;
      }

      let respuestas = [];
      for (let i = 0; i < cantidadRespuestas; i++) {
        const respuesta = prompt(`Ingrese la opcion ${i + 1} para la pregunta ${j + 1}: Ej. Frutillar`);
        console.log(`Opción ${i + 1} es ${respuesta}`)
        respuestas.push({ texto: respuesta, votos: 0 });
      }

      this.preguntas.push({ texto: pregunta, respuestas: respuestas });
    }
    console.log("Preguntas creadas:", this.preguntas);
  }

  votar() {
    this.preguntas.forEach((pregunta, i) => {
      console.log(`Pregunta a votar: ${pregunta.texto}`);
      let respuestaValida = false;
      pregunta.respuestas.forEach((respuesta, j) => {
        console.log(`  ${j + 1}. ${respuesta.texto}`);
      });
      while (!respuestaValida) {
        let voto = parseInt(prompt(`Ingrese su opción (1-${pregunta.respuestas.length}):`));
        if (!isNaN(voto) && voto >= 1 && voto <= pregunta.respuestas.length) {
          pregunta.respuestas[voto - 1].votos += 1;
          console.log(`Ha votado por "${pregunta.respuestas[voto - 1].texto}": ${pregunta.respuestas[voto - 1].votos}`);
          respuestaValida = true;
        } else {
          console.log("no valido");
        }
      }
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
