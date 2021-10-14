//1. Dada la siguiente lista:

const mascotas = ["perro","gato","peces"];


//  1.2- Mostrar por consola el primer valor de la lista usando funciones nativas.

console.log(mascotas[0]);

// 1.3 -Mostrar por consola el largo de la lista actual.

console.log(mascotas.length);

// 1.4- Contestar la pregunta: ¿Que indice tiene el ultimo valor de la lista ?

console.log(mascotas.indexOf("peces"));   // El ultimo valor de la lista tiene indice: 2

// 2. Armar una lista de 5 nombres e imprimir por consola uno por uno.

let nombres1 = ["Martin","Luciana","Susana","Avril","Sofia"];
    nombres1.forEach((nombrar)=> {
        console.log(nombrar)
    });

// 3. Dada la siguiente lista, hacer una funcion que recorra todos los valores y devuelva la suma total 

const numeros =[2,3,45,100,50];

function sumar(array){
    let num = 0;
    for (i of array) {
        num += i
    };
    return num;
};

console.log(sumar(numeros));

// 4. Dada la siguiente lista:

const nombres=["Juan","pedro","Ana","Maria","Wally","Sofia"];

// 14.1 -Contestar la pregunta: ¿Cual es el indice donde esta Wally?  

console.log(nombres.indexOf("Wally"));   // El indice de Wally es = 4

// 14.2- Crear una funcion que recorra la lista y muestre por consola el indice de cada nombre.

lista(nombres);

 function lista(recorrer){
    recorrer.forEach(elemento =>{
        console.log(elemento + " = " + nombres.indexOf(elemento))
    });
 };

// 14.3 -Crear una segunda funcion que recorra la lista y que me muestre por consola solamente el indice donde se encuentra ubicado Wally.

lista2(nombres);

 function lista2(recorrer){
    let indiceWally = nombres.indexOf(recorrer.find(recorrer => recorrer == "Wally"))
        console.log(indiceWally)
 };

 // 5. Dado el siguiente objeto:

let celular={
    nombre:"celular",
    marca:"Samsung",
    modelo:"Galaxy A7",
    precio:67000
};

// 5.1 -Mostrar por consola el modelo.

console.log(celular.modelo);

// 5.2- Crear una funcion que dando un parametro, cambie el valor del precio.

cambiar(73000);

function cambiar(valor) {
    celular.precio = valor
};

console.log(celular.precio);

// 5.3 -Agregar, usando lo que aprendimos de los objetos, la clave color a este objeto que tenga como valor “rojo” .

celular.color="rojo"
console.log(celular)


// 6. Dado la siguiente lista:

const productos=[
    {
    nombre: "notebook",
    marca: "Dell",
    modelo: 7490,
    precio: 158000,
    color: "gris"
    },
    {
        nombre: "zapatillas",
        marca: "Adidas",
        modelo: "Wings",
        precio: 8500,
        color: "negro"
    },
    {
        nombre: "remera",
        marca: "Nike",
        modelo: "Dry Academy",
        precio: 3290,
        color: "azul"
    }
];

// 6.1 -Agregar usando funciones nativas, el objeto “celular” del punto anterior

productos.unshift(celular);
console.log(productos)

// 6.2- Crear una funcion que muestre por consola el precio de cada producto de la lista.

pPrecio();

function pPrecio() {
    productos.forEach((item) => console.log(item.nombre + ": $" + item.precio))
}

// 6.3- Cambiar el precio del producto zapatilla a 9000.

productos[2].precio = 9000;
console.log("Precio actualizado " + productos[2].nombre + ": $" + productos[2].precio)

// 6.4 -Crear una nueva funcion que tome el precio de cada producto y devuelva la suma total.

function sumaTotal(elemento){
    let sumaTotal = 0;
    let i = 0;
        for (items of elemento){
            sumaTotal += elemento[i].precio;
            i++
        }
        return (sumaTotal);
    };
    
console.log("SUMA TOTAL =" + " $" + sumaTotal(productos));


