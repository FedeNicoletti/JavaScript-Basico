let compra = ["Tomate", "Huevo", "Lechuga", "Leche", "Yogurt"];

compra.push("Aceite de Girasol");
compra.pop();

let peliculas = [
  {
    titulo: "Avatar 2",
    director: "James Cameron",
    fecha: new Date(2023, 11, 15),
  },
  {
    titulo: "La tormenta perfecta",
    director: "Wolfgang Petersen",
    fecha: new Date(2000, 7, 3),
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    fecha: new Date(1995, 0, 13),
  },
];

let peliculasFiltradas = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);

let directores = peliculas.map((pelicula) => {
  return pelicula.director;
});
let titulos = peliculas.map((pelicula) => {
  return pelicula.titulo;
});
let directores_titulos = directores.concat(titulos);
let directores_titulos_prop = [...directores, ...titulos];
