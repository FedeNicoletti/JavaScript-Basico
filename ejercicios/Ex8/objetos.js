obj = {
  nombre: "Federico",
  apellido: "Nicoletti",
  edad: 23,
  altura: 1.85,
  IsDeveloper: true,
};
let edad = "edad";
console.log(obj[edad]);

listaAmigos = [
  obj,
  {
    nombre: "Amigo",
    apellido: "A",
    edad: 21,
    altura: 1.77,
    IsDeveloper: true,
  },

  {
    nombre: "Amigo",
    apellido: "B",
    edad: 30,
    altura: 1.88,
    IsDeveloper: true,
  },
];
console.log(listaAmigos.sort((a, b) => b.edad - a.edad));
