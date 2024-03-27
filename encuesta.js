class Usuario {
  constructor(pregunta, cantidad_respuestas, respuesta, votos, cantidad_preguntas) {
    this.pregunta = pregunta;
    this.cantidad_respuestas = cantidad_respuestas;
    this.respuesta = respuesta;
    this.votos = votos;
    this.cantidad_preguntas = cantidad_preguntas;
  }

  crear() {
    this.cantidad_preguntas = prompt("¿Cuántas preguntas tendrá la encuesta?");
    console.log(`Cantidad de preguntas: ${this.cantidad_preguntas}`);

    let preguntas = [];

    for (let j = 0; j < this.cantidad_preguntas; j++) {
      this.pregunta = prompt(`Ingresar pregunta ${j + 1}:`);
      console.log(`Pregunta ${j + 1}: ${this.pregunta}`);
      this.cantidad_respuestas = parseInt(prompt("Ingrese la cantidad de opciones:"));
      console.log(`Cantidad de opciones ${this.cantidad_respuestas}`);

      let respuestas = [];

      if (this.cantidad_respuestas >= 1 && this.cantidad_respuestas <= 8) {
        for (let i = 0; i < this.cantidad_respuestas; i++) {
          this.respuesta = prompt(`Ingrese la opcion ${i + 1} para la pregunta ${j + 1}:`);
          console.log(`Opcion ${i + 1} para la pregunta ${j + 1}: ${this.respuesta}`);
          respuestas.push({ texto: this.respuesta, votos: 0 });
        }
      } else {
        console.log("Ingresar valor entre 1 y 8");
      }

      preguntas.push({ texto: this.pregunta, respuestas: respuestas });
    }
    console.log("Preguntas:", preguntas);
    this.pregunta = preguntas;
    
  }

  votar() {
    for (let i = 0; i < this.cantidad_preguntas; i++) {
      for (let j = 0; j < this.cantidad_respuestas; j++) {
        console.log(`Pregunta a votar: ${this.pregunta[i].texto} y ${this.pregunta[i].respuestas[j].texto}`);
        let voto = parseInt(prompt(`"${this.pregunta[i].texto}" \nIngrese 1 para votar por "${this.pregunta[i].respuestas[j].texto}" cualquier numero para seguir:`));
        if (voto === 1) {
          this.pregunta[i].respuestas[j].votos += voto;
          console.log(`Votos registrados para la respuesta "${this.pregunta[i].respuestas[j].texto}": ${this.pregunta[i].respuestas[j].votos}`);
          break;
        } else {
          this.pregunta[i].respuestas[j].votos = 0;
          console.log("Se ha guardado cero votos para la respuesta");
        }
      }
    }
  }
}

const usuario = new Usuario();

usuario.crear();
usuario.votar();
