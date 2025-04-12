let a=1000000;
let b=1000000;
let z=a+b;
console.log(z)
z=a-b;
console.log(z)
z=a*b;
console.log(z)
z= a/b;
console.log(z)
z=a%b;
console.log(z)
z=a**b
console.log(z)

let i=0;
console.log(++i)
let j=0;
console.log(j++)
console.log(j)
console.log(j++)
console.log(j++)
let k=3
console.log(--k)
let l=3 
console.log(l--)
console.log(l--)

let r =1
r += 3
console.log(r)
r -= 2
console.log(r)
r *= 5
console.log(r)
r /= 3
console.log(r)

a=3
b=2
c=" 3 "
d=3
console.log(a==c)
console.log(a===c)
console.log(a!=c)
console.log(a!==c)

let resultado=(1 > 2) ? " verdadero ": " falso ";
console.log(resultado)
let resultado2=(1>2) ? " verdadero ":0;
console.log(resultado2)
let numero=10
resultado=(numero%2==0) ? " par ":" impar ";
console.log(resultado)

let a1=11
let minimo=0
let maximo=10
if(a >= minimo && a <= maximo){
    console.log("El numero esta en el rango")
}
else {
    console.log("El numero esta fuera del rango")
}

 function miFunction(a2,b2){
console.log("suma: "+(a2+b2))
 }
 function suma(num1,num2){
    let resultado3;
    resultado3= num1 + num2;
    return resultado3;
 }
  miFunction(4,5) 
console.log(suma(5,9))
function mifunction(){
    return  miFunction
}
console.log("hola mundo")

let miexpresado = function (a,b){return a + b};
let resultado4 = miexpresado (1,2);
console.log(resultado4)

const factorial= function fac(n) {
    return n < 2 ? 1 : n * fac (n-1)
}
console.log(factorial(3))

const sumarFunctionFlecha = (num1,num2)=> num1+ num2;
resultado5=sumarFunctionFlecha(3,5)
console.log(resultado5)

//Restando Declarada
function miFunctionRestar(a3,b3){
    console.log("Resta: "+(a3-b3))
     }
     miFunctionRestar(0,0)
// Restando Expresada
let miresta = function (a,b){return a - b};
let resultado7 = miresta (4,2);
console.log(resultado7)

//Restando Flecha
const restarFunctionFlecha = (num3,num4)=> num3- num4;
resultado6=restarFunctionFlecha(3,5)
console.log(resultado6)






//Dividir dos numeros enteros declarada
function miFunctiondividir(a3,b3){
   return a3/b3
     }
     console.log(miFunctiondividir(0,0))
//Calcular el cuadrado de dos numeros declarada
function miFunctioncuadrado(numero8){
   return numero8*numero8
}
console.log(miFunctioncuadrado(8,8))
console.log(miFunctioncuadrado(9,9))



let persona= {
    nombre: "Alex",
    apellido: "Aguilar",
    telefono: 3223427352,
    email:"moncadadaniel198@gmail.com",
    edad:25,
    nombrecompleto1: function (){
        return this.nombre  + ' ' + this.apellido}
    
    }
console.log(persona)
console.log(persona.nombrecompleto1())

for (nombrepropiedad in persona){
    console.log(nombrepropiedad)
    console.log(persona[nombrepropiedad])
}

persona.tel = 6017350706;
console.log(persona)

let personaString= JSON.stringify(persona)
console.log(personaString)


let persona3= new Object ()
persona3.nombre ="Daniel";
persona3.apellido="Aguilar"
console.log(persona3)









function Persona(nombre = "Juan", apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombrecompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}
 
console.log(Persona);

//////////////////////////////////////////////////////////////////////////////////////////////////

let padre = new Persona ()
console.log(padre)

let cliente1 = {
    nombre:"Daniel",
    edad: 18,
    saludar: function(){
        return "Hola mi nombre es " + this.nombre
    }
}
console.log(cliente1.saludar())


function fsaludar (nombre){
    return " Hola " + this.nombre
}
 let cliente2 = {
    nombre:" Alex ",
    saludar: fsaludar
 }
 console.log(cliente2.saludar())



 let constructor  = function (precio){
    let miObjeto = {
        preciobase: precio,
        iva: 1.21,
        calcularIva: function(){
            return(this.preciobase*this.iva)
        }
    }
    return  miObjeto
 }
 precio1 = constructor(100)
 precio1.calcularIva()

 console.log(precio1.calcularIva())




 function Myfunction() {
    let count = 1;
    function contador() {
        return count;
    }
    return contador(); 
}

console.log(Myfunction());



let x=10

function foo(){

    let y=20

    function bar(){
        let z = 15
        let output = x + y + z
        return output
    }    
    return bar
}

console.log(foo()())