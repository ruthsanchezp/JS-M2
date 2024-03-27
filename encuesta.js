class Usuario {
  constructor(pregunta, cantidad_respuestas, respuesta, votos, cantidad_preguntas) {
    this.pregunta = pregunta; //la/s pregunta/s  de la encuesta
    this.cantidad_respuestas = cantidad_respuestas; // la cantidad de opciones que tendra una pregunta
    this.respuesta = respuesta; // las descripciones de las opciones
    this.votos = votos; // voto que recibe cada opción
    this.cantidad_preguntas = cantidad_preguntas; // la cantidad de preguntas que tendra la encuesta
  }

  crear() {
    this.cantidad_preguntas = prompt("¿Cuántas preguntas tendrá la encuesta?"); //pregunto por la cantidad de preguntas que tendra la encuesta
    console.log(`Cantidad de preguntas: ${this.cantidad_preguntas}`);

    let preguntas = []; // el array que almacenará las preguntas de la encuesta 

    for (let j = 0; j < this.cantidad_preguntas; j++) { // bucle para solicitar el prompt hasta la cantidad de preguntas ingresada
      this.pregunta = prompt(`Ingresar pregunta ${j + 1}:`); // ingresa la/ pregunta 1,2,3,4,5... hasta cantidad_preguntas
      console.log(`Pregunta ${j + 1}: ${this.pregunta}`); 
      this.cantidad_respuestas = parseInt(prompt("Ingrese la cantidad de opciones:")); // Ingresa la cantidad de opciones de la pregunta j+1
      console.log(`Cantidad de opciones ${this.cantidad_respuestas}`);

      let respuestas = []; // guarda las opciones que se ingresaran al crear la encuesta

      if (this.cantidad_respuestas >= 2 && this.cantidad_respuestas <= 8) { // condición para que la cantidad de opciones sea entre 2 y 8
        for (let i = 0; i < this.cantidad_respuestas; i++) { // bucle para solicitar la i+1 opcion para la j+1 respuesta, hasta la cantidad_respuestas que se ingreso en la linea 19  
          this.respuesta = prompt(`Ingrese la opcion ${i + 1} para la pregunta ${j + 1}:`); // solicitud de la opcion
          console.log(`Opcion ${i + 1} para la pregunta ${j + 1}: ${this.respuesta}`);
          respuestas.push({ texto: this.respuesta, votos: 0 }); // pushea el texto de la opcion con voto cero inicialmente, y lo guarda en respuestas[]
        }
      } else {
        console.log("Ingresar valor entre 1 y 8"); // muestra en consola que habia qur ingresar un valor entre 1 y 8
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
