class Estudiante {
  constructor(nombre, asignaturas) {
     this.nombre = nombre ;
     this.asignaturas = asignaturas;
  }
    obtenDatos() {
    console.log(`Hola mi nombre es ${this.nombre} y curso ${this.asignaturas}`)
  }
}

nuevoEstudiante = new Estudiante("Federico", ["JS", "HTML", "CSS"])
console.log(nuevoEstudiante.obtenDatos());

