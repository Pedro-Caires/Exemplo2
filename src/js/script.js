// // declarações e variaveis
// var nome ="fiap";
// console.log(nome)

// let idade =17;
// console.log(idade)

// const sobrenome ="Caires"
// console.log(sobrenome)
// // undefined
// let aula; 
// console.log(aula)
// // null
// let valor = null;
// console.log(valor)

// let exemplo1={}; 

// let exemplo2=[];

// // TIPO VARIAVEIS
// let exemplo3 = 10;
// console.log(typeof exemplo3)
// let exemplo4 = "aula"
// console.log(typeof exemplo4)

// let exemplo5 =true;
// console.log(typeof exemplo5)

// let exemplo6 =["pedrinho", "dioguinho", "lorenzinho"];
// console.log(typeof exemplo6)

// // CONVERSÕES

// // float => inteiro
// let numfloat =123.456;
// console.log(parseInt(numfloat));

// // string => float
// let numString ="547.987";
// console.log(parseFloat(numString));

// // float => string
// let numfloat1 =554.965;
// console.log(numfloat1.toString());

// let numInt=100;
// console.log(numfloat.toString());

// // metodos - PARTE 1

// // LENGTH - VERIFICA O TAMANHO DA STRING

// let frase ="o mundo da tecnologia";
// console.log(frase.length)

// // indexOf - retorna um trecho de um texto

// let texto ="Programação sustentavel";
// console.log(texto.indexOf("ão"))

// // slice - retorna parte de um texto apontando o inicio e o fimal

// let info= "processamento de ponta";
// console.log(info.slice(0,13))

// // OPERADORES ARITMÉTICOS
// const num1=10
// const num2=20
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// // OPERADORES LÓGICOS

// const num3 ="20";
// const num4 =30;

// // console.log(num3 < num4);
// // console.log(num3 > num4 && num4 < 50);
// // console.log(num3 > num4 || num4 > num3)
// // console.log(num4 === num3 || num4 <= num3);

// // OPERAÇÕES DE COMPARAÇÃO
// const num5 = 25;
// const num6 = 35;

// console.log(num5 == num6); //COMPARA
// console.log(num5 === num6); //COMPARA E VERIFICA O TIPO DA VÁRIAVEL
// console.log(num5 != num6); //DIFERENTE

// ESTRUTURA CONDICIONAL

// IF/else

// let valor = 100;

// if(valor==120){
//     console.log("é verdadeiro")
// }else{
//     console.log("Valor errado")
// }

// if/else - encadeado ou aninhado

// let idade = 14;

// if(idade < 14){
//     console.log ("não pode entrar na balada")
// }
// else if(idade >= 14 && idade < 18){
//     console.log ("Pode entrar e Curtir")
// }
// else if (idade > 50){
//     console.log("você não tem idade para isso")
// }
// else{
//     console.log("fica em casa vendo o timão")
// }

// Condição ternaria

// let valor2 =301;

// let resultado = valor2 == 300 ? "certo": "errado"
// console.log (resultado)

// SWITCH CASE

// let time ="Corinthians";

// switch(time){
//     case "Corinthians":
//         console.log("Melhor Time")
//         break;
//     case "Palmeiras":
//         console.log("Não tem um mundial")
//         break;
//     case "São Paulo":
//         console.log("time de viado")
//         break;

// }

// // ESTRUTURAS DE LAÇOS

// for(let i=0;i<10;i++){
//     console.log("O valor de I é:", i)
// }



// ESTRUTURA DE LAÇO DE REPETIÇÃO

// WHILE

// let w=0

// while(w <=10){
//     console.log("o valor de W é",w)
//     w++;
// }

// // do while

// let z=10;

// do{
//     console.log("do while é",z)
//     z++;
// }while(z<=100)

//FUNÇÕES

function saudacao(nome){
    //console.log("seja bem vindo", nome)
    console.log(`Seja bem vindo ${nome}`)//string literais
}

saudacao ("Fiap")

function semaforo(){
    let sinal ="verde";
    console.log(`o semaforo está ${sinal}`)
}
semaforo();