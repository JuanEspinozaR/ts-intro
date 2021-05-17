/** 
 * 15. Funciones JS
*/

function sumar(a: string, b:string):string{
    return a + b;
}
function sumarNum(a:number, b:number):number{
    return a + b;
}
const sumarFlecha = (a: number, b:number): number =>{
    return a + b;
}

function multiplicar (a:number, b?:number, base:number = 2): number{
    return a * base;
}

/*const resultado = sumar('Juan','Espinoza');
console.log(resultado);

console.log(multiplicar(1,0,10));
*/
interface PersonajeLOR{
    nombre:string,
    pv:number,
    mostrarHp: () => void,
    nivelVida: () => void
};

function curar(personaje: PersonajeLOR, curarX:number):void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre : 'Juan Espinoza',
    pv: 50,
    mostrarHp(){
        console.log('Tiene '+ this.pv+ ' puntos de vida.');
    },
    nivelVida(){
        var nvlMsj = '';
        if(this.pv <= 10)
            nvlMsj = 'Bajo';
            else
                if(this.pv > 10 )
                nvlMsj = 'Por bajar';
                    else
                        nvlMsj = 'Bueno';
        console.log('Tu nivel de vida está ' + nvlMsj);
    }
};

console.log(curar(nuevoPersonaje, 20));
nuevoPersonaje.mostrarHp();
nuevoPersonaje.nivelVida();