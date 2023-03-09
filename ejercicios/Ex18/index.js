let nombre = "Federico";
let apellido = "Nicoletti";
let objetoPersona = {
    nombre: nombre,
    apellido: apellido
}

localStorage.setItem("objeto", JSON.stringify(objetoPersona))
sessionStorage.setItem("objeto", JSON.stringify(objetoPersona))
document.cookie = "nombreCaducidad=objetoPersona;expires=" + new Date(2023, 2, 9).toUTCString()
