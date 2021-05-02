/**
 *  arreglos 14. Objetos, arreglos e interfaces
 */
 let habilidades: (string[]) = ['JS','JAVA','Administración de proyectos','Bases de datos'];
 //No acepta push de valores que sean de otro tipo
 habilidades.push("Angular");
 console.log(habilidades);
 
 //solo si se declara con diferentes valores
 let edades= ["40",50,true];
 console.log(edades);
 
 //Constantes
 const personaje = {
     nombre: 'Juan Ángel',
     ap_paterno: 'Espinoza',
     ap_materno: 'Ramírez',
     edad: 25,
     profesion: 'Programador',
     activo: true
 }
 console.log(personaje);
 
 interface Usuario  {
     nombre: string;
     ap_paterno: string;
     ap_materno: string;
     edad: number;
     habilidades: string[],
     puebloNatal?:string
 };
 
 const usuario : Usuario ={
     nombre :'Juan Ángel',
     ap_paterno: 'Espinoza',
     ap_materno: 'Ramírez',
     edad: 24,
     habilidades: ['JAVA',"PL/SQL","JAX-RS","HTML5"],
 }
 usuario.puebloNatal= 'Torreón, Coahuila';
 
 console.table(usuario);
