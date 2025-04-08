// declarações e variaveis
var nome ="fiap";
console.log(nome)

let idade =17;
console.log(idade)

const sobrenome ="Caires"
console.log(sobrenome)
// undefined
let aula; 
console.log(aula)
// null
let valor = null;
console.log(valor)

let exemplo1={}; 

let exemplo2=[];

// TIPO VARIAVEIS
let exemplo3 = 10;
console.log(typeof exemplo3)
let exemplo4 = "aula"
console.log(typeof exemplo4)

let exemplo5 =true;
console.log(typeof exemplo5)

let exemplo6 =["pedrinho", "dioguinho", "lorenzinho"];
console.log(typeof exemplo6)

// CONVERSÕES

// float => inteiro
let numfloat =123.456;
console.log(parseInt(numfloat));

// string => float
let numString ="547.987";
console.log(parseFloat(numString));

// float => string
let numfloat1 =554.965;
console.log(numfloat1.toString());

let numInt=100;
console.log(numfloat.toString());

// metodos - PARTE 1

// LENGTH - VERIFICA O TAMANHO DA STRING

let frase ="o mundo da tecnologia";
console.log(frase.length)

// indexOf - retorna um trecho de um texto

let texto ="Programação sustentavel";
console.log(texto.indexOf("ão"))

// slice - retorna parte de um texto apontando o inicio e o fimal

let info= "processamento de ponta";
console.log(info.slice(0,13))

// OPERADORES ARITMÉTICOS
const num1=10
const num2=20
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// OPERADORES LÓGICOS

const num3 ="20";
const num4 =30;

// console.log(num3 < num4);
// console.log(num3 > num4 && num4 < 50);
// console.log(num3 > num4 || num4 > num3)
// console.log(num4 === num3 || num4 <= num3);

// OPERAÇÕES DE COMPARAÇÃO
const num5 = 25;
const num6 = 35;

console.log(num5 == num6); //COMPARA
console.log(num5 === num6); //COMPARA E VERIFICA O TIPO DA VÁRIAVEL
console.log(num5 != num6); //DIFERENTE