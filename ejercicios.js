//1.
function willHeSurvive(numberDragons, numberBullets) {
let ammountBullets = numberDragons * 2;
    if (ammountBullets > numberBullets) {

        return false

        
    }else{
        return true
    }
    
}
let dragons = 8

let bullets = 6

willHeSurvive(dragons,bullets)

let survive = willHeSurvive(dragons,bullets);
console.log(survive);


//2.
function sumarNumeros(numeros) {
    return numeros.reduce ((acumulador, actual) => acumulador + actual, 0);
}


const numeros1 =  [1, 5.2, 4, 0, -1]
console.log(sumarNumeros(numeros1));

const numeros2 = [];
console.log(sumarNumeros(numeros2));


const numeros3 = [-2.398];
console.log(sumarNumeros(numeros3));*/

//3.
function countBy(x, n) {
   const resultado = [];
   for (let i= 1; i <= n; i++) {
    resultado.push(x * i);
   }
   return resultado;
}

console.log(countBy(1,10));


console.log(countBy(2,5));

//4.

function uefaEuro2023(equipos, resultados) {
    const[equipo1, equipo2] = equipos;
    const [resultado1, resultado2] = resultados;
    if (resultado1 > resultado2 ) {
       
        return `En el partido ${equipo1} - ${equipo2}, gano ${equipo1}`;
    }
    else if (resultado2 > resultado1) {
        return `en el partido ${equipo1} - ${equipo2}, gano ${equipo2}`;
    }else {
        return`en el partido ${equipo1} - ${equipo2}, los equipos empataron`;
    }
}
console.log(uefaEuro2023(['alemania', 'ucrania'], [2, 0]));

console.log(uefaEuro2023(['belgium', 'italy'], [0, 2]));

console.log(uefaEuro2023(['portugal', 'iceland'], [1, 1]));*/

//6.
let resultado = average ([4.5,3.5,2.2,3,4.3])

function average(numeros) {
    if (numeros.length > 0) {
        let promedio = 0;
        let suma = 0;

        for (let index = 0; index < numeros.length; index++) {
            suma = suma + numeros [index];
            
        }
        promedio = suma / numeros.length

         return promedio
    }

    return 0
    
}console.log(resultado);



const compareScore = ()=>{
    notaAlejandro = 1.8;
    promedioCompanieros = average ([4.5,3.5,2.2,3,4.3]);

    if (notaAlejandro > promedioCompanieros) {
        return true
    } else {
        return false 
    }
}
alert(compareScore())


const numeros = ['1','2','3','4','5','6'];
for (let index = 0; index < numeros.length; index++) {
    //console.log(numeros [index]);    

    if (numeros [index] < 5) {
        numeros [index] = '0'

    }else{
        numeros [index] = '1'
    }
    

}
console.log(numeros);

//8.

function productosBaratos (productos) {
    let resultado = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].precio >= 5 && productos[i].precio <= 10) 
        {
            resultado.push(productos[i].nombre);
        }
        
    }
    return resultado;
}

let prods = [
    {nombre: "Arroz", precio: 5},
    {nombre: "Pan", precio: 3},
    {nombre: "Tomate", precio: 8},
    {nombre: "Leche", precio: 15}
];

console.log(productosBaratos (prods));


//10.

let auto = { velocidad: 3,
acelerar () {
    this.velocidad++;
   },
   frenar (){
    this.velocidad--;
 }
 
};


console.log(auto.velocidad);
// 0

auto.acelerar();
console.log(auto.velocidad);
//1
auto.frenar()
console.log(auto.velocidad);
//0

auto.acelerar();
console.log(auto.velocidad);
//2


//11.

let obtenerImpares = (numeros) => {
    return
    numeros.filter(numero => numero % 2 !== 0);
};


//ejemplo de uso

let impares = obtenerImpares([1,2,3,4,5]);
console.log(impares);

//15. no funciono o no se 
function ordenarDesc(array) {
    return array.sort ((a,b)=> b-a);   
}

const numeros =  [77, 34, 7, 11, 23, 2];
console.log(ordenarDesc(numeros));

//13.

 function max(numeros) {
    let  maximo = numeros [0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros [i]  > maximo) 
        {
            maximo = numeros [i]; 
        }        
    }
    return maximo;
 }

console.log(max([1, 2, 3, 4]));

console.log(max([63, 85,39, 24, 3]));

 
//16.

let personas = [
    { nombre: "Ana", precio: 25 },
    { nombre: "Carlos", precio: 13 },
    { nombre: "Luisa", precio: 32 },
    { nombre: "Juan", precio: 15 },
    { nombre: "Elisa", precio: 45 },
    { nombre: "Sofia", precio: 9 },
    { nombre: "Manuela", precio: 30 },
];

let mayoresDeEdad = (personas) => {
    let mayores = [];

    for (let i = 0; i < personas.length; i++) {
        if (personas [i].precio >= 18) {
            
            mayores.push(personas[i].nombre);
        }
        //console.log(personas[i].nombre);
        
    }console.log(mayores);
        return mayores;   
}

let mayores = mayoresDeEdad(personas);
console.log(mayores);

//18 
function sumarListas(lista1,lista2) {
    let resultado = [];
    for (let i = 0; i < lista1.length;i++) {
      resultado.push(lista1[i] + lista2 [i])      
    }
    return resultado;
}

let lista1 = [3, 5, 7, -3, 9, 2]
let lista2 = [5, -4, 7, 3, 5, 1];
let resultado = sumarListas (lista1, lista2)

console.log(resultado);



//20.
function sumaParImpar(lista) {
    if (lista.length === 0) {
        lista = [0];
}
    let suma = lista.reduce((a, b) => a + b, 0);
    if (suma % 2 === 0) {
        return "la suma es par"
}   else{
        return "la suma es impar"
    }
} 
console.log();

