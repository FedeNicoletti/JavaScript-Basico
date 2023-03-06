let hoy  = new Date ();
let miNacimiento = new Date("September 25, 1999");
let fechaMayor;
if(hoy.getTime() > miNacimiento.getTime()) fechaMayor = true;
let diaNacimiento = miNacimiento.getDate();
let mesNacimiento = miNacimiento.getMonth()+1;
let añoNacimiento = miNacimiento.getFullYear();