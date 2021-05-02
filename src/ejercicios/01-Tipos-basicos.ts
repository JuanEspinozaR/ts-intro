/*
    ===== Código de TypeScript =====
*/
//Asignacion de cadenas
let nombre= 'Juan Arturo';
let apellidos:string ="Espinoza Ramírez";
let estatus:boolean = true;
let edad = 24;

console.log("Nombre "+ nombre+", Carrera:"+apellidos +", Activo:"+estatus+", edad:"+edad);

//Variables con dos tipos de datos
let anos: string | number = 'Cuarenta';
console.log("Edad texto " + anos);
anos = 40;
console.log("Edad no. "+anos);
