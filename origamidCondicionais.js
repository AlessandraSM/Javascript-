//Verifique se a sua idade é maior do que de algum parente 

// const idadeAle = 35; 
// const idadeHelo = 10; 

// if (idadeAle > idadeHelo){
//     console.log(`Sua idade é maior`)
// }else{ 
//     console.log (`Sua idade é`)
// }
//Aqui fiz uma verificação de dados retornando na tela que a minha idade é maior que outra idadeHelo! 

//Como André Rafael fez

var minhaIdade = 25; 
var idadePrimo = 12; 

if(minhaIdade > idadePrimo){ 
    console.log(`Sua idade é maior`);
}else if(minhaIdade === idadePrimo){
    console.log(`Sua idade é igual`);
}else{
    console.log(`Sua idade é menor`);
}

//Qual valor é retornado na seguinte expressão? 
//lembrando que quando tem && ele retornar sempre o último valor VERDADEIRO! 
//SE der FALSO ele ja retorna o primeiro falso 


var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
//ANALISANDO (5 - 2) é 3 sendo 3 um valor VERDADEIRO 
//CONTINUANDO (5 - ' ') 5 menos uma "string com espaço" o valor é 5 ainda é VERDADEIRO
//CONTINUANDO (5 - 2) é 3 sendo 3 um valor VERDADEIRO

//Verifique se as seguintes variáveis são "true"

var nome = 'Alessandra'; 
var idade = 35;
var possuiDoutorado = false; 
var empregoFuturo; 
var dinheiroNaConta = 0; 
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta) ; 

//Compare o total de habitantes do Brasil com a China (valor em milhões) 
var brasil = 207; 
var china = 1340; 

//Como eu resolvi o exercício!

if (brasil === china){
    console.log("Os números de habitantes são iguais.")
}else{
    console.log("Atenção! Quantidade de habitante diferente.")
}

//Como ele resolveu 
if (brasil > china){
    console.log("Brasil tem mais habitantes")
}else{ 
    console.log("Brasil tem menos habitantes")
}

//O que irá aparecer no console? 
if(("Gato" === "gato") && (5 > 2)){
    console.log("Verdadeiro"); 
}else{
    console.log("Falso"); 
}

//O que aparece no console quando tem OU || ele continua procurando analisando o que tem no if e o que tem dentro do console. 
if (("Gato" === "gato") || (5 > 2)){
    console.log("Gato" && "Cão"); 
}else{ 
    console.log("Falso"); 
}



