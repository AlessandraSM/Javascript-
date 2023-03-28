const arrayFrutas = ['Banana', 'Maça', 'Laranja', 'Mamão', 'Melancia'];
arrayFrutas.shift()
// console.log(arrayFrutas)
//Aqui retiro apenas o primeiro elemento sem alterar o array

const arrayFrutas2 = ['Banana', 'Maça', 'Laranja', 'Mamão', 'Melancia'];
arrayFrutas2.splice(0, 2)
// console.log(arrayFrutas2)
// método splice primeiro parâmetro determina a posição a partir da retirada e segundo parâmetro a quantidade a ser retirada!

// 1 - Elaborar um programa que leia os preços de produtos de supermercado.
// E calcule a quantidade total dos produtos comprados.
const produtos = [
    { Nome: 'Arroz', preco: 25.00 },
    { Nome: 'Feijão', preco: 15.00 },
    { Nome: 'Macarrão', preco: 8.00 },
    { Nome: 'Cenoura', preco: 3.00 },
    { Nome: 'Beterraba', preco: 3.00 },
]
const produtosComprados = [
    { Nome: 'Arroz', Preco: 25.00 },
    { Nome: 'Feijão', Preco: 15.00 }
]
let sum = 0;
for (let i = 0; i < produtosComprados.length; i++) {
    sum += produtosComprados[i].Preco;
}
// valor da variavel soma = 0
// valor da variavel soma = 0 + 25
// valor da variavel soma = 25 + 15
// console.log(sum);
let usersArray = [
    { name: 'Alexandre', age: 45 },
    { name: 'Joao', age: 12 },
    { name: 'Marcos', age: 10 }
]
let reduce = usersArray.reduce((valor1, object) => {
    return valor1 + object.age
}, 0)
// console.log(reduce);

//Considere o seguinte array de notas

const notas = [7, 7, 8 ,9];
const notas2 = [10]
const notas3 = notas.concat(notas2)

// console.log(notas3)
// console.log(notas)

//Método spread Operator copia o arry original sem alterar
const notasCopia = [...notas, 10];
// const novaNew = notasCopia.push(10);
// console.log(notasCopia)


// Crie um novo array com a nota 10 a mais, sem alterar o array original

//método concat() não altera o array

//Copiar o array original e adicionar o 10 

//**********************************************
//EXERCISES DAY 17/01 DE JANUARY

// DESAFIO - Padronizando os nomes
// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas. Transforme todos os nomes em letras maiúsculas

//usando o método toUpperCase deixamos tudo em letras maiúsculas 

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];
const names = nomes.map(p => p.toUpperCase());
// console.log(names)

// DESAFIO - Filtrando por nota
// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos (está reprovado quem tem a média menor que 5)

const medias = [7, 4.5, 8, 7.5];
const mediasV = Math.min(...medias);
// console.log(mediasV)

//usando o método math.min é possível retornar o menor númeor de um array - 

// const usandoFor = [7, 4.5, 8, 7.5];
// for (usandoFor = 0; usandoFor < 5; usandoFor++){
//     console.log(usandoFor);
// }

// const arrayNumber1 = [...medias];
// for (i = 0; i < arrayNumber1.length; i++){
//     if (arrayNumber1[i] < 5){
//         console.log(`Você esta reprovado`)
//     }else{
//         console.log(`Você esta aprovado`)
//     }
// }

const arrayMap = [...medias]; 
//o parâmetro pode mudar de acordo com sua lógica quando o map percorre o array aqui usei o media como parametro indicando a posição do item dentro array. 
const map = arrayMap.map((media)=>{
    if (media < 5 ){
        return (`você esta reprovado`)
    }else{
        return (`você esta aprovado`)
    }
})
// console.log(map)


//método reduce 

// const outraVez = [...medias]; 

// const menor = outraVez.map(Number).reduce(function(a,b){
//     return Math.menor(a, b);
// });
// console.log(menor);

// DESAFIO - Removendo duplicatas
// Um professor acidentalmente adicionou nomes repetidos na lista de chamada

const listNames = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const newList = listNames.filter((parameter, i)=>listNames.indexOf(parameter) === i)
// console.log(newList)

// Remova os nomes repetidos, deixando apenas um de cada

// DESAFIO - Médias das turmas
// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala


// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const somaJS = 0;

// for ( const i = 0; i < salaJS.length; i++ ){
//     somaJS += salaJS[i];
    
// }
// console.log(somaJS);

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
//usando o método reduce deu certo de primeira!
var soma = salaJS.reduce((soma, i) => {
    return soma + i;
});
console.log(soma);


//acho que posso usar um for varrer os dados somar cada item retornando uma média 
//verificar isso 


// function somaMedias(n) {
//     const total = 0;
//     for (const i = 1; i <= n; i++) total += i;
//     return total;
// }
// console.log(somaMedias(5));


const salaJava = [6, 5, 8, 9, 5, 6];
var soma2 = salaJava.reduce((soma2, i) => {
    return soma2 + i;
});
console.log(soma2);


const salaPython = [7, 3.5, 8, 9.5];
var soma3 = salaPython.reduce((soma3, i) => {
    return soma3 + i;
});
console.log(soma3);


//tentando fazer com for depois de tanto sofrer com for agora deu certo (de acordo com um material didático essa seria a maneira mais performática de usar a soma de array)

var arrayJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
var somaTeste = 0;

for(var i = 0; i < arrayJS.length; i++) {
    somaTeste += arrayJS[i];
}

// console.log(somaTeste);

//Agora preciso calcular a média geral 

const mediaGeral = (soma + soma2 + soma3)/3;
console.log(Math.round(mediaGeral))

//Utilizando Math.round para arredondamento de valores quebrados 

