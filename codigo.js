// selecion de elementos
const operacion = document.querySelector(".operacion");
const resultado = document.querySelector(".resultado");
// operaciones
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multi = document.getElementById("multi");
const divi = document.getElementById("divi");

const igual = document.getElementById("igual");
const reset = document.getElementById("reset");
// numeros
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const cero = document.getElementById("cero");
// new
const exponente = document.getElementById("exponente");
const PI = document.getElementById("PI");
const sen = document.getElementById("seno");
const cos = document.getElementById("coseno");
const tan = document.getElementById("tangente");
const raizCubica = document.getElementById("raizCubica");
const raizCuadrada = document.getElementById("raizCuadrada");
const borrar = document.getElementById("borrar");

let opA;
let opB;
let opC;
let op;

uno.addEventListener("click",()=>{
    aggNum("1")
})
dos.addEventListener("click",()=>{
	aggNum("2")
})
tres.addEventListener("click",()=>{
	aggNum("3")
})
cuatro.addEventListener("click",()=>{
    aggNum("4")	
})
cinco.addEventListener("click",()=>{
	aggNum("5")
})
seis.addEventListener("click",()=>{
	aggNum("6")
})
siete.addEventListener("click",()=>{
	aggNum("7")
})
ocho.addEventListener("click",()=>{
	aggNum("8")
})
nueve.addEventListener("click",()=>{
	aggNum("9")
})
cero.addEventListener("click",()=>{
	aggNum("0")
})

// funcion para sumar
suma.addEventListener("click",()=>{
    opA = operacion.textContent;
    operacion.textContent = operacion.textContent + " + "
    op = "+";
    limpiar()
})
// funcion para restar
resta.addEventListener("click",()=>{
    opA = operacion.textContent;
    operacion.textContent = operacion.textContent + " - "
    op = "-";
    limpiar()
})
// funcion para multiplicar
multi.addEventListener("click",()=>{
    opA = operacion.textContent;
    operacion.textContent = operacion.textContent + " x "
    op = "*";
    limpiar()
})
// funcion para dividir
divi.addEventListener("click",()=>{
    opA = operacion.textContent;
    operacion.textContent = operacion.textContent + " / "
    op = "/";
    limpiar()
})
// funcion para limpiar campos
reset.addEventListener("click",()=>{
    resetear()
})
// funcion para calcular el exponente
exponente.addEventListener("click",()=>{
    opA = operacion.textContent;
    operacion.textContent = operacion.textContent + " x² "
    op = "x2";
    limpiar();
})
// PI
PI.addEventListener("click",()=>{
    opA = Math.PI;
    operacion.textContent = operacion.textContent + opA;
    limpiar();
})
// funcion para calcular la raiz cuadrada
raizCuadrada.addEventListener("click",()=>{
    operacion.textContent = operacion.textContent + " √ ";
    op = "√";
    limpiar();
})
// funcion para calcular la raiz cubica
raizCubica.addEventListener("click",()=>{
    operacion.textContent = operacion.textContent + " 3√ ";
    op = "²√";
    limpiar();
})
cos.addEventListener("click",()=>{
    operacion.textContent = "cos(";
    op = "cos";
    limpiar()
})
sen.addEventListener("click",()=>{
    operacion.textContent = "sen(";
    op = "sen";
    limpiar()
})
tan.addEventListener("click",()=>{
    operacion.textContent = "tan(";
    op = "tan";
    limpiar()
})
// funcion para resolver
igual.addEventListener("click",()=>{
    opB = resultado.textContent;
    resolver()
})

// ##############################################


// Funcion para resolver =
function resolver(){
    switch(op){
        case "+":
            opC = resultado.textContent = parseInt(opA) + parseInt(opB);
        break
        case "-":
            opC = resultado.textContent = parseInt(opA) - parseInt(opB);
        break
        case "*":
            opC = resultado.textContent = parseInt(opA) * parseInt(opB);
        break
        case "/":
            opC = resultado.textContent = parseInt(opA) / parseInt(opB);
        break
        case "x2":
            opC = resultado.textContent = parseInt(opA) * parseInt(opA);
        break 
        case "√":
            opC = resultado.textContent = Math.sqrt(parseInt(opB));
        break
        case "²√":
            opC = resultado.textContent = Math.cbrt(parseInt(opB));
        break
        case "cos":
            opC = resultado.textContent = Math.cos(parseInt(opB))
        break
        case "sen":
            opC = resultado.textContent = Math.sin(parseInt(opB))
        break
        case "tan":
            opC = resultado.textContent = Math.tan(parseInt(opB))
        break
       
    }    
}
//funcion para limpiar
function limpiar (){
	resultado.textContent = "";
}
// funcion para resetear
function resetear (){
	resultado.textContent = "";
    operacion.textContent = "";
	opA = 0;
	opB = 0;
	op = "";
}
// funcion agregar numero
function aggNum (num){
    operacion.textContent = operacion.textContent + num;
    resultado.textContent = resultado.textContent + num;
}